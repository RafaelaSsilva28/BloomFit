import React, { useEffect, useState } from "react";

import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    Modal,
    ActivityIndicator,
    KeyboardAvoidingView,
    Platform,
    Image,
} from "react-native";

import {
    ArrowLeft,
    Plus,
    Dumbbell,
    Pencil,
    Trash2,
    X,
    Clock3,
    Layers3,
    Repeat2,
    Weight,
    Flower2,
    ImagePlus,
    Video,
    PlayCircle,
    AlertCircle,
    CheckCircle2,
    Info,
} from "lucide-react-native";

import * as ImagePicker from "expo-image-picker";
import { Directory, File, Paths } from "expo-file-system";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "../../styles/colors";
import styles from "./WorkoutDetailsScreen.styles";

import {
    getWorkoutExercises,
    createExercise,
    updateExercise,
    deleteExercise,
} from "../../database/treinoService";

export default function WorkoutDetailsScreen({ workout, onBack }) {
    const [exercises, setExercises] = useState([]);
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);

    const [modalVisible, setModalVisible] = useState(false);
    const [editingExercise, setEditingExercise] = useState(null);

    const [imageViewerVisible, setImageViewerVisible] = useState(false);
    const [selectedImageUri, setSelectedImageUri] = useState(null);

    const [name, setName] = useState("");
    const [sets, setSets] = useState("3");
    const [reps, setReps] = useState("12");
    const [weight, setWeight] = useState("");
    const [rest, setRest] = useState("60");
    const [description, setDescription] = useState("");

    const [mediaUri, setMediaUri] = useState(null);
    const [mediaType, setMediaType] = useState(null);
    const [selectingMedia, setSelectingMedia] = useState(false);

    // Modal personalizado de mensagens e confirmações
    const [dialog, setDialog] = useState({
        visible: false,
        title: "",
        message: "",
        type: "info",
        confirmText: "Entendi",
        cancelText: "Cancelar",
        onConfirm: null,
    });

    function showDialog(title, message, type = "info", onConfirm = null) {
        setDialog({
            visible: true,
            title,
            message,
            type,
            confirmText: type === "confirm" ? "Excluir" : "Entendi",
            cancelText: "Cancelar",
            onConfirm,
        });
    }

    function closeDialog() {
        setDialog((previous) => ({
            ...previous,
            visible: false,
            onConfirm: null,
        }));
    }

    async function confirmDialogAction() {
        const action = dialog.onConfirm;
        closeDialog();

        if (action) {
            await action();
        }
    }

    async function loadExercises() {
        try {
            setLoading(true);
            const data = await getWorkoutExercises(workout.id);
            setExercises(data);
        } catch (error) {
            console.error("Erro ao carregar exercícios:", error);
            showDialog(
                "Não foi possível carregar",
                "Ocorreu um problema ao buscar os exercícios deste treino.",
                "error"
            );
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadExercises();
    }, [workout.id]);

    function resetForm() {
        setName("");
        setSets("3");
        setReps("12");
        setWeight("");
        setRest("60");
        setDescription("");
        setMediaUri(null);
        setMediaType(null);
        setEditingExercise(null);
    }

    function openCreateModal() {
        resetForm();
        setModalVisible(true);
    }

    function openEditModal(exercise) {
        setEditingExercise(exercise);
        setName(exercise.nome || "");
        setSets(String(exercise.series ?? 3));
        setReps(String(exercise.repeticoes ?? 12));
        setWeight(
            exercise.carga !== null && exercise.carga !== undefined
                ? String(exercise.carga)
                : ""
        );
        setRest(String(exercise.descanso ?? 60));
        setDescription(exercise.descricao || "");
        setMediaUri(exercise.midia_uri || null);
        setMediaType(exercise.midia_tipo || null);
        setModalVisible(true);
    }

    function openImageViewer(uri) {
        setSelectedImageUri(uri);
        setImageViewerVisible(true);
    }

    function closeImageViewer() {
        setImageViewerVisible(false);
        setSelectedImageUri(null);
    }

    async function saveMediaLocally(asset, type) {
        if (Platform.OS === "web") {
            return asset.uri;
        }

        const directory = new Directory(
            Paths.document,
            "bloomfit-exercise-media"
        );

        if (!directory.exists) {
            directory.create({
                idempotent: true,
                intermediates: true,
            });
        }

        const extensionFromName = asset.fileName
            ? asset.fileName.split(".").pop()
            : null;

        const extensionFromMime = asset.mimeType?.split("/").pop();

        const extension =
            extensionFromName ||
            extensionFromMime ||
            (type === "video" ? "mp4" : "jpg");

        const fileName = `exercise-${Date.now()}.${extension}`;
        const sourceFile = new File(asset.uri);
        const destinationFile = new File(directory, fileName);

        await sourceFile.copy(destinationFile);

        return destinationFile.uri;
    }

    async function chooseMedia(type) {
        try {
            setSelectingMedia(true);

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: [type === "image" ? "images" : "videos"],
                allowsEditing: type === "image",
                quality: 1,
            });

            if (result.canceled || !result.assets?.length) {
                return;
            }

            const asset = result.assets[0];
            const savedUri = await saveMediaLocally(asset, type);

            setMediaUri(savedUri);
            setMediaType(type);
        } catch (error) {
            console.error("Erro ao selecionar mídia:", error);
            showDialog(
                "Não foi possível adicionar",
                "Ocorreu um erro ao selecionar esse arquivo. Tente novamente.",
                "error"
            );
        } finally {
            setSelectingMedia(false);
        }
    }

    function removeMedia() {
        setMediaUri(null);
        setMediaType(null);
    }

    async function handleSaveExercise() {
        if (!name.trim()) {
            showDialog(
                "Nome obrigatório",
                "Informe o nome do exercício antes de continuar.",
                "warning"
            );
            return;
        }

        const numericSets = Number(sets);
        const numericReps = Number(reps);
        const numericRest = Number(rest);
        const numericWeight =
            weight.trim() === "" ? null : Number(weight);

        if (
            !Number.isInteger(numericSets) ||
            numericSets <= 0 ||
            !Number.isInteger(numericReps) ||
            numericReps <= 0 ||
            !Number.isInteger(numericRest) ||
            numericRest < 0
        ) {
            showDialog(
                "Confira os valores",
                "Séries e repetições devem ser números inteiros maiores que zero. O descanso não pode ser negativo.",
                "warning"
            );
            return;
        }

        if (
            numericWeight !== null &&
            (!Number.isFinite(numericWeight) || numericWeight < 0)
        ) {
            showDialog(
                "Carga inválida",
                "Informe uma carga válida ou deixe o campo vazio.",
                "warning"
            );
            return;
        }

        const exerciseData = {
            treino_id: workout.id,
            nome: name.trim(),
            series: numericSets,
            repeticoes: numericReps,
            carga: numericWeight,
            descanso: numericRest,
            descricao: description.trim(),
            midia_uri: mediaUri,
            midia_tipo: mediaType,
        };

        try {
            setSaving(true);

            if (editingExercise) {
                await updateExercise(editingExercise.id, exerciseData);
            } else {
                await createExercise(exerciseData);
            }

            setModalVisible(false);
            resetForm();
            await loadExercises();
        } catch (error) {
            console.error("Erro ao salvar exercício:", error);
            showDialog(
                "Não foi possível salvar",
                "Ocorreu um erro ao salvar o exercício. Tente novamente.",
                "error"
            );
        } finally {
            setSaving(false);
        }
    }

    async function handleDeleteExercise(exercise) {
        showDialog(
            "Excluir exercício?",
            `Deseja realmente remover "${exercise.nome}" deste treino? Essa ação não poderá ser desfeita.`,
            "confirm",
            async () => {
                try {
                    await deleteExercise(exercise.id);

                    setExercises((previousExercises) =>
                        previousExercises.filter(
                            (item) => item.id !== exercise.id
                        )
                    );

                    showDialog(
                        "Exercício removido",
                        "O exercício foi excluído da sua sequência.",
                        "success"
                    );
                } catch (error) {
                    console.error("Erro ao excluir exercício:", error);
                    showDialog(
                        "Não foi possível excluir",
                        "Ocorreu um erro ao remover o exercício. Tente novamente.",
                        "error"
                    );
                }
            }
        );
    }

    function closeModal() {
        setModalVisible(false);
        resetForm();
    }

    function renderDialogIcon() {
        if (dialog.type === "confirm") {
            return <Trash2 size={25} color={colors.danger} />;
        }

        if (dialog.type === "success") {
            return <CheckCircle2 size={27} color={colors.success} />;
        }

        if (dialog.type === "warning") {
            return <AlertCircle size={27} color={colors.warning} />;
        }

        if (dialog.type === "error") {
            return <AlertCircle size={27} color={colors.danger} />;
        }

        return <Info size={27} color={colors.primaryDark} />;
    }

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                <TouchableOpacity
                    style={styles.backButton}
                    onPress={onBack}
                    activeOpacity={0.7}
                >
                    <ArrowLeft size={19} color={colors.wine} />
                    <Text style={styles.backText}>Voltar aos treinos</Text>
                </TouchableOpacity>

                <View style={styles.header}>
                    <View style={styles.eyebrowRow}>
                        <View style={styles.eyebrowLine} />
                        <Text style={styles.eyebrow}>
                            SUA ROTINA PERSONALIZADA
                        </Text>
                    </View>

                    <View style={styles.titleRow}>
                        <View style={styles.titleContent}>
                            <Text style={styles.title}>{workout.nome}</Text>
                            <Text style={styles.subtitle}>
                                {workout.descricao ||
                                    "Uma sequência criada por você."}
                            </Text>
                        </View>

                        <View style={styles.flowerIcon}>
                            <Flower2
                                size={29}
                                color={colors.wine}
                                strokeWidth={1.3}
                            />
                        </View>
                    </View>

                    <View style={styles.categoryTag}>
                        <Dumbbell size={14} color={colors.wine} />
                        <Text style={styles.categoryText}>
                            {workout.categoria || "Personalizado"}
                        </Text>
                    </View>
                </View>

                <View style={styles.sectionHeader}>
                    <View>
                        <Text style={styles.sectionTitle}>
                            Seus exercícios
                        </Text>
                        <Text style={styles.sectionSubtitle}>
                            Organize cada etapa do seu treino.
                        </Text>
                    </View>

                    <Text style={styles.counter}>
                        {String(exercises.length).padStart(2, "0")}
                    </Text>
                </View>

                {loading ? (
                    <View style={styles.loading}>
                        <ActivityIndicator
                            color={colors.primaryDark}
                            size="small"
                        />
                        <Text style={styles.loadingText}>
                            Carregando exercícios...
                        </Text>
                    </View>
                ) : exercises.length > 0 ? (
                    exercises.map((exercise, index) => (
                        <View key={exercise.id} style={styles.exerciseItem}>
                            <View style={styles.exerciseNumber}>
                                <Text style={styles.exerciseNumberText}>
                                    {String(index + 1).padStart(2, "0")}
                                </Text>
                            </View>

                            <View style={styles.exerciseContent}>
                                <Text style={styles.exerciseName}>
                                    {exercise.nome}
                                </Text>

                                {exercise.descricao ? (
                                    <Text style={styles.exerciseDescription}>
                                        {exercise.descricao}
                                    </Text>
                                ) : null}

                                <View style={styles.exerciseMetadata}>
                                    <View style={styles.metadataItem}>
                                        <Layers3 size={13} color={colors.textSecondary} />
                                        <Text style={styles.metadataText}>
                                            {exercise.series} séries
                                        </Text>
                                    </View>

                                    <View style={styles.metadataItem}>
                                        <Repeat2 size={13} color={colors.textSecondary} />
                                        <Text style={styles.metadataText}>
                                            {exercise.repeticoes} reps
                                        </Text>
                                    </View>

                                    {exercise.carga !== null &&
                                    exercise.carga !== undefined ? (
                                        <View style={styles.metadataItem}>
                                            <Weight size={13} color={colors.textSecondary} />
                                            <Text style={styles.metadataText}>
                                                {exercise.carga} kg
                                            </Text>
                                        </View>
                                    ) : null}

                                    <View style={styles.metadataItem}>
                                        <Clock3 size={13} color={colors.textSecondary} />
                                        <Text style={styles.metadataText}>
                                            {exercise.descanso ?? 60}s
                                        </Text>
                                    </View>
                                </View>

                                {exercise.midia_uri ? (
                                    <View style={styles.exerciseMediaContainer}>
                                        {exercise.midia_tipo === "image" ? (
                                            <TouchableOpacity
                                                activeOpacity={0.85}
                                                onPress={() =>
                                                    openImageViewer(exercise.midia_uri)
                                                }
                                            >
                                                <Image
                                                    source={{ uri: exercise.midia_uri }}
                                                    style={styles.exerciseMediaImage}
                                                    resizeMode="cover"
                                                />
                                            </TouchableOpacity>
                                        ) : (
                                            <View style={styles.exerciseVideoBadge}>
                                                <PlayCircle
                                                    size={20}
                                                    color={colors.wine}
                                                />
                                                <Text style={styles.exerciseVideoText}>
                                                    Vídeo anexado
                                                </Text>
                                            </View>
                                        )}
                                    </View>
                                ) : null}
                            </View>

                            <View style={styles.exerciseActions}>
                                <TouchableOpacity
                                    style={styles.actionButton}
                                    onPress={() => openEditModal(exercise)}
                                >
                                    <Pencil size={15} color={colors.wine} />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={styles.actionButton}
                                    onPress={() => handleDeleteExercise(exercise)}
                                >
                                    <Trash2 size={15} color={colors.danger} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                ) : (
                    <View style={styles.emptyState}>
                        <View style={styles.emptyIcon}>
                            <Dumbbell
                                size={28}
                                color={colors.wine}
                                strokeWidth={1.4}
                            />
                        </View>

                        <Text style={styles.emptyTitle}>
                            Seu treino começa aqui.
                        </Text>

                        <Text style={styles.emptyDescription}>
                            Adicione os exercícios que farão parte desta sequência.
                        </Text>
                    </View>
                )}

                <TouchableOpacity
                    style={styles.addButton}
                    onPress={openCreateModal}
                    activeOpacity={0.85}
                >
                    <Plus size={19} color="#FFFFFF" />
                    <Text style={styles.addButtonText}>
                        Adicionar exercício
                    </Text>
                </TouchableOpacity>

                <View style={styles.footer}>
                    <Flower2
                        size={18}
                        color={colors.primaryDark}
                        strokeWidth={1.3}
                    />
                    <Text style={styles.footerText}>
                        Um passo de cada vez.
                    </Text>
                </View>
            </ScrollView>

            {/* VISUALIZADOR DA IMAGEM */}
            <Modal
                visible={imageViewerVisible}
                transparent
                animationType="fade"
                statusBarTranslucent
                onRequestClose={closeImageViewer}
            >
                <View style={styles.imageViewerOverlay}>
                    <TouchableOpacity
                        style={styles.imageViewerClose}
                        onPress={closeImageViewer}
                        activeOpacity={0.8}
                    >
                        <X size={24} color="#FFFFFF" />
                    </TouchableOpacity>

                    {selectedImageUri ? (
                        <Image
                            source={{ uri: selectedImageUri }}
                            style={styles.imageViewerImage}
                            resizeMode="contain"
                        />
                    ) : null}
                </View>
            </Modal>

            {/* MODAL DE CADASTRO E EDIÇÃO */}
            <Modal
                visible={modalVisible}
                transparent
                animationType="fade"
                statusBarTranslucent
                onRequestClose={closeModal}
            >
                <KeyboardAvoidingView
                    style={styles.modalOverlay}
                    behavior={Platform.OS === "ios" ? "padding" : undefined}
                >
                    <View style={styles.modalContent}>
                        <View style={styles.modalHeader}>
                            <View>
                                <Text style={styles.modalEyebrow}>
                                    DETALHES DO EXERCÍCIO
                                </Text>
                                <Text style={styles.modalTitle}>
                                    {editingExercise
                                        ? "Editar exercício"
                                        : "Novo exercício"}
                                </Text>
                            </View>

                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={closeModal}
                            >
                                <X size={19} color={colors.wine} />
                            </TouchableOpacity>
                        </View>

                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps="handled"
                        >
                            <Text style={styles.inputLabel}>Nome do exercício</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Ex.: Agachamento"
                                placeholderTextColor={colors.textLight}
                                value={name}
                                onChangeText={setName}
                                maxLength={70}
                            />

                            <View style={styles.fieldRow}>
                                <View style={styles.fieldColumn}>
                                    <Text style={styles.inputLabel}>Séries</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={sets}
                                        onChangeText={setSets}
                                        keyboardType="number-pad"
                                        placeholder="3"
                                    />
                                </View>

                                <View style={styles.fieldColumn}>
                                    <Text style={styles.inputLabel}>Repetições</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={reps}
                                        onChangeText={setReps}
                                        keyboardType="number-pad"
                                        placeholder="12"
                                    />
                                </View>
                            </View>

                            <View style={styles.fieldRow}>
                                <View style={styles.fieldColumn}>
                                    <Text style={styles.inputLabel}>Carga (kg)</Text>
                                    <TextInput
                                        style={styles.input}
                                        value={weight}
                                        onChangeText={setWeight}
                                        keyboardType="decimal-pad"
                                        placeholder="Opcional"
                                    />
                                </View>

                                <View style={styles.fieldColumn}>
                                    <Text style={styles.inputLabel}>
                                        Descanso (segundos)
                                    </Text>
                                    <TextInput
                                        style={styles.input}
                                        value={rest}
                                        onChangeText={setRest}
                                        keyboardType="number-pad"
                                        placeholder="60"
                                    />
                                </View>
                            </View>

                            <Text style={styles.inputLabel}>Observações</Text>
                            <TextInput
                                style={[styles.input, styles.textArea]}
                                placeholder="Adicione uma descrição ou orientação..."
                                placeholderTextColor={colors.textLight}
                                value={description}
                                onChangeText={setDescription}
                                multiline
                                textAlignVertical="top"
                                maxLength={250}
                            />

                            <View style={styles.mediaSection}>
                                <Text style={styles.inputLabel}>
                                    Foto ou vídeo do exercício
                                </Text>
                                <Text style={styles.mediaDescription}>
                                    Anexe uma demonstração para consultar durante o treino.
                                </Text>

                                <View style={styles.mediaButtonsRow}>
                                    <TouchableOpacity
                                        style={styles.mediaButton}
                                        onPress={() => chooseMedia("image")}
                                        disabled={selectingMedia}
                                        activeOpacity={0.8}
                                    >
                                        <ImagePlus size={17} color={colors.wine} />
                                        <Text style={styles.mediaButtonText}>
                                            Adicionar foto
                                        </Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        style={styles.mediaButton}
                                        onPress={() => chooseMedia("video")}
                                        disabled={selectingMedia}
                                        activeOpacity={0.8}
                                    >
                                        <Video size={17} color={colors.wine} />
                                        <Text style={styles.mediaButtonText}>
                                            Adicionar vídeo
                                        </Text>
                                    </TouchableOpacity>
                                </View>

                                {selectingMedia ? (
                                    <View style={styles.mediaLoading}>
                                        <ActivityIndicator
                                            size="small"
                                            color={colors.primaryDark}
                                        />
                                        <Text style={styles.mediaDescription}>
                                            Preparando arquivo...
                                        </Text>
                                    </View>
                                ) : null}

                                {mediaUri ? (
                                    <View style={styles.mediaPreviewContainer}>
                                        {mediaType === "image" ? (
                                            <Image
                                                source={{ uri: mediaUri }}
                                                style={styles.mediaPreviewImage}
                                                resizeMode="cover"
                                            />
                                        ) : (
                                            <View style={styles.mediaVideoPreview}>
                                                <PlayCircle
                                                    size={34}
                                                    color={colors.wine}
                                                />
                                                <Text style={styles.mediaVideoText}>
                                                    Vídeo selecionado
                                                </Text>
                                            </View>
                                        )}

                                        <TouchableOpacity
                                            style={styles.removeMediaButton}
                                            onPress={removeMedia}
                                            activeOpacity={0.8}
                                        >
                                            <X size={15} color="#FFFFFF" />
                                            <Text style={styles.removeMediaText}>
                                                Remover mídia
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                ) : (
                                    <View style={styles.mediaEmpty}>
                                        <ImagePlus
                                            size={22}
                                            color={colors.textLight}
                                        />
                                        <Text style={styles.mediaEmptyText}>
                                            Nenhum arquivo adicionado
                                        </Text>
                                    </View>
                                )}
                            </View>

                            <TouchableOpacity
                                style={[
                                    styles.saveButton,
                                    (saving || selectingMedia) &&
                                        styles.saveButtonDisabled,
                                ]}
                                onPress={handleSaveExercise}
                                disabled={saving || selectingMedia}
                                activeOpacity={0.85}
                            >
                                {saving ? (
                                    <ActivityIndicator color="#FFFFFF" />
                                ) : (
                                    <>
                                        <Plus size={18} color="#FFFFFF" />
                                        <Text style={styles.saveButtonText}>
                                            {editingExercise
                                                ? "Salvar alterações"
                                                : "Salvar exercício"}
                                        </Text>
                                    </>
                                )}
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </Modal>

            {/* MODAL PERSONALIZADO DE AVISOS E CONFIRMAÇÕES */}
            <Modal
                visible={dialog.visible}
                transparent
                animationType="fade"
                statusBarTranslucent
                onRequestClose={closeDialog}
            >
                <View style={styles.dialogOverlay}>
                    <View style={styles.dialogContent}>
                        <View style={[
                            styles.dialogIcon,
                            dialog.type === "confirm" && styles.dialogIconDanger,
                            dialog.type === "success" && styles.dialogIconSuccess,
                            dialog.type === "warning" && styles.dialogIconWarning,
                            dialog.type === "error" && styles.dialogIconDanger,
                        ]}>
                            {renderDialogIcon()}
                        </View>

                        <Text style={styles.dialogEyebrow}>
                            BLOOMFIT · SUA ROTINA
                        </Text>

                        <Text style={styles.dialogTitle}>
                            {dialog.title}
                        </Text>

                        <Text style={styles.dialogMessage}>
                            {dialog.message}
                        </Text>

                        <View style={styles.dialogActions}>
                            {dialog.type === "confirm" ? (
                                <TouchableOpacity
                                    style={styles.dialogCancelButton}
                                    onPress={closeDialog}
                                    activeOpacity={0.8}
                                >
                                    <Text style={styles.dialogCancelText}>
                                        Cancelar
                                    </Text>
                                </TouchableOpacity>
                            ) : null}

                            <TouchableOpacity
                                style={[
                                    styles.dialogConfirmButton,
                                    dialog.type === "confirm" &&
                                        styles.dialogDeleteButton,
                                ]}
                                onPress={confirmDialogAction}
                                activeOpacity={0.85}
                            >
                                <Text style={styles.dialogConfirmText}>
                                    {dialog.confirmText}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}