import React, { useEffect, useState } from "react";

import {
    View,
    Text,
    TextInput,
    ScrollView,
    TouchableOpacity,
    StatusBar,
    Modal,
    KeyboardAvoidingView,
    Platform,
    ActivityIndicator,
} from "react-native";

import {
    Search,
    Plus,
    ChevronRight,
    Flower2,
    Dumbbell,
    Heart,
    Sparkles,
    Clock3,
    ArrowUpRight,
    SlidersHorizontal,
    Pencil,
    Trash2,
    X,
    AlertCircle,
    CheckCircle2,
    Info,
} from "lucide-react-native";

import Svg, { Path, Circle, Ellipse } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";

import colors from "../../styles/colors";
import styles from "./WorkoutsScreen.styles";
import WorkoutDetailsScreen from "./WorkoutDetailsScreen";

import {
    getCustomWorkouts,
    createWorkout,
    updateWorkout,
    deleteWorkout,
    getWorkoutDays,
} from "../../database/treinoService";

const categories = [
    "Todos",
    "Inferiores",
    "Superiores",
    "Cardio",
    "Abdômen",
];

const customCategories = categories.filter(
    (category) => category !== "Todos"
);

// O banco utiliza 0 para domingo e 1 a 6 para segunda a sábado.
const weekDays = [
    { label: "SEG", value: 1 },
    { label: "TER", value: 2 },
    { label: "QUA", value: 3 },
    { label: "QUI", value: 4 },
    { label: "SEX", value: 5 },
    { label: "SÁB", value: 6 },
    { label: "DOM", value: 0 },
];

function formatWorkoutDays(days) {
    if (!days) return "Sem dias definidos";

    const values = String(days)
        .split(",")
        .map((value) => Number(value))
        .filter((value) => Number.isInteger(value));

    if (values.length === 0) return "Sem dias definidos";

    return weekDays
        .filter((day) => values.includes(day.value))
        .map((day) => day.label)
        .join(" · ");
}

const readyWorkouts = [
    {
        id: "1",
        name: "Inferiores",
        description: "Um treino para trabalhar pernas e glúteos.",
        level: "Iniciante",
        duration: "45 min",
        exercises: 6,
        category: "Inferiores",
        icon: "legs",
    },
    {
        id: "2",
        name: "Superiores",
        description: "Exercícios para membros superiores.",
        level: "Intermediário",
        duration: "40 min",
        exercises: 5,
        category: "Superiores",
        icon: "arms",
    },
    {
        id: "3",
        name: "Cardio leve",
        description: "Uma opção para movimentar o corpo.",
        level: "Iniciante",
        duration: "30 min",
        exercises: 4,
        category: "Cardio",
        icon: "cardio",
    },
    {
        id: "4",
        name: "Abdômen",
        description: "Uma sequência de exercícios para o core.",
        level: "Intermediário",
        duration: "25 min",
        exercises: 5,
        category: "Abdômen",
        icon: "abs",
    },
];

function FloralDecoration({ color = "#D99BAF" }) {
    return (
        <Svg width="145" height="145" viewBox="0 0 190 190">
            <Path
                d="M95 95 C65 70 50 40 72 28 C92 17 105 49 95 95"
                stroke={color}
                strokeWidth="1.4"
                fill="none"
            />
            <Path
                d="M95 95 C125 70 140 40 118 28 C98 17 85 49 95 95"
                stroke={color}
                strokeWidth="1.4"
                fill="none"
            />
            <Path
                d="M95 95 C125 120 155 135 163 112 C170 91 133 80 95 95"
                stroke={color}
                strokeWidth="1.4"
                fill="none"
            />
            <Path
                d="M95 95 C65 120 35 135 27 112 C20 91 57 80 95 95"
                stroke={color}
                strokeWidth="1.4"
                fill="none"
            />
            <Path
                d="M95 95 C70 125 73 158 95 158 C117 158 120 125 95 95"
                stroke={color}
                strokeWidth="1.4"
                fill="none"
            />
            <Circle
                cx="95"
                cy="95"
                r="10"
                stroke={color}
                strokeWidth="1.4"
                fill="none"
            />
            <Path
                d="M95 105 C95 130 105 151 123 166"
                stroke={color}
                strokeWidth="1.3"
                fill="none"
            />
            <Ellipse
                cx="120"
                cy="150"
                rx="8"
                ry="17"
                transform="rotate(40 120 150)"
                stroke={color}
                strokeWidth="1.3"
                fill="none"
            />
        </Svg>
    );
}

function WorkoutIcon({ type }) {
    const iconProps = {
        size: 25,
        color: colors.wine,
        strokeWidth: 1.5,
    };

    switch (type) {
        case "legs":
            return <Dumbbell {...iconProps} />;
        case "arms":
            return <Heart {...iconProps} />;
        case "cardio":
            return <Sparkles {...iconProps} />;
        default:
            return <Flower2 {...iconProps} />;
    }
}

export default function WorkoutsScreen() {
    const [activeCategory, setActiveCategory] = useState("Todos");
    const [activeTab, setActiveTab] = useState("Prontos");
    const [search, setSearch] = useState("");

    const [customWorkouts, setCustomWorkouts] = useState([]);
    const [loadingWorkouts, setLoadingWorkouts] = useState(true);

    const [modalVisible, setModalVisible] = useState(false);
        const [editingWorkout, setEditingWorkout] = useState(null);

    const [workoutName, setWorkoutName] = useState("");
    const [workoutDescription, setWorkoutDescription] = useState("");
    const [workoutCategory, setWorkoutCategory] = useState("Inferiores");
    const [selectedDays, setSelectedDays] = useState([]);

    const [selectedWorkout, setSelectedWorkout] = useState(null);
    const [saving, setSaving] = useState(false);

    // Modal personalizado de mensagens e confirmações
    const [dialog, setDialog] = useState({
        visible: false,
        title: "",
        message: "",
        type: "info",
        confirmText: "Entendi",
        onConfirm: null,
    });

    function showDialog(title, message, type = "info", onConfirm = null) {
        setDialog({
            visible: true,
            title,
            message,
            type,
            confirmText: type === "confirm" ? "Excluir" : "Entendi",
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

    async function loadCustomWorkouts() {
        try {
            setLoadingWorkouts(true);
            const workouts = await getCustomWorkouts();
            setCustomWorkouts(workouts);
        } catch (error) {
            console.error("Erro ao carregar treinos:", error);
            showDialog(
                "Não foi possível carregar",
                "Ocorreu um problema ao buscar seus treinos. Tente novamente.",
                "error"
            );
        } finally {
            setLoadingWorkouts(false);
        }
    }

    useEffect(() => {
        loadCustomWorkouts();
    }, []);

    function resetForm() {
        setWorkoutName("");
        setWorkoutDescription("");
        setWorkoutCategory("Inferiores");
        setSelectedDays([]);
        setEditingWorkout(null);
    }

    function openCreateModal() {
        resetForm();
        setModalVisible(true);
    }

    async function openEditModal(workout) {
        try {
            const days = await getWorkoutDays(workout.id);

            setEditingWorkout(workout);
            setWorkoutName(workout.nome);
            setWorkoutDescription(workout.descricao || "");
            setWorkoutCategory(workout.categoria || "Inferiores");
            setSelectedDays(days);
            setModalVisible(true);
        } catch (error) {
            console.error("Erro ao carregar dias do treino:", error);
            showDialog(
                "Não foi possível abrir",
                "Ocorreu um problema ao carregar os dias programados deste treino.",
                "error"
            );
        }
    }

    function toggleWorkoutDay(day) {
        setSelectedDays((previousDays) =>
            previousDays.includes(day)
                ? previousDays.filter((item) => item !== day)
                : [...previousDays, day]
        );
    }

    function closeWorkoutModal() {
        setModalVisible(false);
        resetForm();
    }

    async function handleSaveWorkout() {
        if (!workoutName.trim()) {
            showDialog(
                "Nome obrigatório",
                "Informe um nome para o seu treino antes de continuar.",
                "warning"
            );
            return;
        }

        if (!workoutCategory) {
            showDialog(
                "Categoria obrigatória",
                "Selecione uma categoria para organizar seu treino.",
                "warning"
            );
            return;
        }

        const wasEditing = Boolean(editingWorkout);

        const workoutData = {
            nome: workoutName.trim(),
            descricao: workoutDescription.trim(),
            categoria: workoutCategory,
            dias_semana: selectedDays,
        };

        try {
            setSaving(true);

            if (wasEditing) {
                await updateWorkout(editingWorkout.id, workoutData);
            } else {
                await createWorkout(workoutData);
            }

            setModalVisible(false);
            resetForm();

            await loadCustomWorkouts();
            setActiveTab("Meus treinos");

            showDialog(
                wasEditing ? "Treino atualizado!" : "Treino salvo!",
                wasEditing
                    ? "As alterações foram salvas com sucesso."
                    : "Seu novo treino já está na sua coleção.",
                "success"
            );
        } catch (error) {
            console.error("Erro ao salvar treino:", error);
            showDialog(
                "Não foi possível salvar",
                "Ocorreu um erro ao salvar seu treino. Tente novamente.",
                "error"
            );
        } finally {
            setSaving(false);
        }
    }

    async function handleDeleteWorkout(workout) {
        showDialog(
            "Excluir este treino?",
            `Deseja realmente remover "${workout.nome}"? Os exercícios vinculados a ele também poderão ser removidos. Essa ação não poderá ser desfeita.`,
            "confirm",
            async () => {
                try {
                    await deleteWorkout(workout.id);

                    setCustomWorkouts((previousWorkouts) =>
                        previousWorkouts.filter(
                            (item) => item.id !== workout.id
                        )
                    );

                    showDialog(
                        "Treino excluído",
                        "O treino foi removido da sua coleção.",
                        "success"
                    );
                } catch (error) {
                    console.error("Erro ao excluir treino:", error);
                    showDialog(
                        "Não foi possível excluir",
                        "Ocorreu um erro ao remover esse treino. Tente novamente.",
                        "error"
                    );
                }
            }
        );
    }
        const filteredReadyWorkouts = readyWorkouts.filter((workout) => {
        const matchesCategory =
            activeCategory === "Todos" ||
            workout.category === activeCategory;

        const matchesSearch =
            workout.name.toLowerCase().includes(search.toLowerCase()) ||
            workout.description.toLowerCase().includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    const filteredCustomWorkouts = customWorkouts.filter((workout) => {
        const matchesCategory =
            activeCategory === "Todos" ||
            workout.categoria === activeCategory;

        const matchesSearch =
            (workout.nome || "")
                .toLowerCase()
                .includes(search.toLowerCase()) ||
            (workout.descricao || "")
                .toLowerCase()
                .includes(search.toLowerCase());

        return matchesCategory && matchesSearch;
    });

    function renderReadyWorkout(workout) {
        return (
            <TouchableOpacity
                key={workout.id}
                style={styles.workoutCard}
                activeOpacity={0.85}
                onPress={() => setSelectedWorkout(workout)}
            >
                <View style={styles.workoutIconContainer}>
                    <WorkoutIcon type={workout.icon} />
                </View>

                <View style={styles.workoutInfo}>
                    <Text style={styles.workoutCategory}>
                        {workout.category}
                    </Text>

                    <Text style={styles.workoutName}>
                        {workout.name}
                    </Text>

                    <Text style={styles.workoutDescription}>
                        {workout.description}
                    </Text>

                    <View style={styles.workoutMeta}>
                        <View style={styles.metaItem}>
                            <Clock3 size={13} color={colors.wine} />
                            <Text style={styles.metaText}>
                                {workout.duration}
                            </Text>
                        </View>

                        <View style={styles.metaItem}>
                            <Dumbbell size={13} color={colors.wine} />
                            <Text style={styles.metaText}>
                                {workout.exercises} exercícios
                            </Text>
                        </View>
                    </View>
                </View>

                <ChevronRight
                    size={21}
                    color={colors.wine}
                />
            </TouchableOpacity>
        );
    }

    function renderCustomWorkout(workout) {
        return (
            <View
                key={workout.id}
                style={styles.customWorkoutCard}
            >
                <TouchableOpacity
                    style={styles.customWorkoutMain}
                    activeOpacity={0.85}
                    onPress={() => setSelectedWorkout(workout)}
                >
                    <View style={styles.workoutIconContainer}>
                        <Flower2
                            size={25}
                            color={colors.wine}
                            strokeWidth={1.5}
                        />
                    </View>

                    <View style={styles.workoutInfo}>
                        <Text style={styles.workoutCategory}>
                            {workout.categoria || "Personalizado"}
                        </Text>

                        <Text style={styles.workoutName}>
                            {workout.nome}
                        </Text>

                        <Text style={styles.workoutDescription}>
                            {workout.descricao ||
                                "Seu treino personalizado."}
                        </Text>

                        <Text style={styles.customWorkoutDays}>
                            {formatWorkoutDays(workout.dias_semana)}
                        </Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.customWorkoutActions}>
                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => openEditModal(workout)}
                        activeOpacity={0.7}
                    >
                        <Pencil size={17} color={colors.wine} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.actionButton}
                        onPress={() => handleDeleteWorkout(workout)}
                        activeOpacity={0.7}
                    >
                        <Trash2 size={17} color="#B45B70" />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    if (selectedWorkout) {
        return (
            <WorkoutDetailsScreen
                workout={selectedWorkout}
                onBack={() => setSelectedWorkout(null)}
            />
        );
    }

    return (
        <SafeAreaView
            style={styles.container}
            edges={["top", "left", "right"]}
        >
            <StatusBar
                barStyle="dark-content"
                backgroundColor="#FFFAFB"
            />

            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
            >
                {/* Cabeçalho */}
                <View style={styles.header}>
                    <View>
                        <Text style={styles.headerEyebrow}>
                            SUA JORNADA, SEU RITMO
                        </Text>

                        <Text style={styles.headerTitle}>
                            Meus treinos
                        </Text>

                        <Text style={styles.headerSubtitle}>
                            Cada movimento é uma conquista.
                        </Text>
                    </View>

                    <View style={styles.headerFlower}>
                        <FloralDecoration />
                    </View>
                </View>

                {/* Destaque */}
                <View style={styles.highlightCard}>
                    <View style={styles.highlightTextContainer}>
                        <Text style={styles.highlightEyebrow}>
                            FLORESÇA NO SEU TEMPO
                        </Text>

                        <Text style={styles.highlightTitle}>
                            Seu próximo passo começa aqui.
                        </Text>

                        <Text style={styles.highlightDescription}>
                            Organize seus treinos e acompanhe sua evolução.
                        </Text>
                    </View>

                    <View style={styles.highlightDecoration}>
                        <Flower2
                            size={48}
                            color="#FFFFFF"
                            strokeWidth={1}
                        />
                    </View>
                </View>

                {/* Abas */}
                <View style={styles.tabsContainer}>
                    <TouchableOpacity
                        style={[
                            styles.tab,
                            activeTab === "Prontos" && styles.activeTab,
                        ]}
                        onPress={() => setActiveTab("Prontos")}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                activeTab === "Prontos" &&
                                    styles.activeTabText,
                            ]}
                        >
                            Treinos prontos
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[
                            styles.tab,
                            activeTab === "Meus treinos" &&
                                styles.activeTab,
                        ]}
                        onPress={() => setActiveTab("Meus treinos")}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                activeTab === "Meus treinos" &&
                                    styles.activeTabText,
                            ]}
                        >
                            Meus treinos
                        </Text>
                    </TouchableOpacity>
                </View>                {/* Pesquisa */}
                <View style={styles.searchContainer}>
                    <Search
                        size={19}
                        color={colors.textSecondary}
                    />

                    <TextInput
                        style={styles.searchInput}
                        placeholder="Buscar treino..."
                        placeholderTextColor={colors.textSecondary}
                        value={search}
                        onChangeText={setSearch}
                    />

                    {search.length > 0 && (
                        <TouchableOpacity
                            onPress={() => setSearch("")}
                        >
                            <X size={17} color={colors.textSecondary} />
                        </TouchableOpacity>
                    )}
                </View>

                {/* Categorias */}
                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.categoriesContainer}
                >
                    {categories.map((category) => (
                        <TouchableOpacity
                            key={category}
                            style={[
                                styles.categoryButton,
                                activeCategory === category &&
                                    styles.activeCategoryButton,
                            ]}
                            onPress={() => setActiveCategory(category)}
                        >
                            <Text
                                style={[
                                    styles.categoryText,
                                    activeCategory === category &&
                                        styles.activeCategoryText,
                                ]}
                            >
                                {category}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                {/* Conteúdo das abas */}
                {activeTab === "Prontos" ? (
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <View>
                                <Text style={styles.sectionEyebrow}>
                                    PARA COMEÇAR
                                </Text>

                                <Text style={styles.sectionTitle}>
                                    Escolha seu treino
                                </Text>
                            </View>

                            <Text style={styles.sectionCount}>
                                {filteredReadyWorkouts.length} opções
                            </Text>
                        </View>

                        {filteredReadyWorkouts.length > 0 ? (
                            filteredReadyWorkouts.map(renderReadyWorkout)
                        ) : (
                            <View style={styles.emptyState}>
                                <Search
                                    size={30}
                                    color={colors.rose}
                                />

                                <Text style={styles.emptyTitle}>
                                    Nenhum treino encontrado
                                </Text>

                                <Text style={styles.emptyDescription}>
                                    Tente mudar a categoria ou a pesquisa.
                                </Text>
                            </View>
                        )}
                    </View>
                ) : (
                    <View style={styles.section}>
                        <View style={styles.sectionHeader}>
                            <View>
                                <Text style={styles.sectionEyebrow}>
                                    DO SEU JEITO
                                </Text>

                                <Text style={styles.sectionTitle}>
                                    Minha coleção
                                </Text>
                            </View>

                            <TouchableOpacity
                                style={styles.addWorkoutButton}
                                onPress={openCreateModal}
                                activeOpacity={0.8}
                            >
                                <Plus size={17} color="#FFFFFF" />
                                <Text style={styles.addWorkoutButtonText}>
                                    Criar
                                </Text>
                            </TouchableOpacity>
                        </View>

                        {loadingWorkouts ? (
                            <View style={styles.loadingContainer}>
                                <ActivityIndicator
                                    size="small"
                                    color={colors.wine}
                                />

                                <Text style={styles.loadingText}>
                                    Carregando seus treinos...
                                </Text>
                            </View>
                        ) : filteredCustomWorkouts.length > 0 ? (
                            filteredCustomWorkouts.map(renderCustomWorkout)
                        ) : (
                            <View style={styles.emptyState}>
                                <View style={styles.emptyIcon}>
                                    <Flower2
                                        size={34}
                                        color={colors.rose}
                                        strokeWidth={1.4}
                                    />
                                </View>

                                <Text style={styles.emptyTitle}>
                                    Sua coleção começa aqui
                                </Text>

                                <Text style={styles.emptyDescription}>
                                    Crie seu primeiro treino personalizado
                                    e organize sua rotina do seu jeito.
                                </Text>

                                <TouchableOpacity
                                    style={styles.emptyButton}
                                    onPress={openCreateModal}
                                    activeOpacity={0.8}
                                >
                                    <Plus size={17} color="#FFFFFF" />
                                    <Text style={styles.emptyButtonText}>
                                        Criar meu primeiro treino
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        )}
                    </View>
                )}

                <View style={styles.bottomSpacing} />
            </ScrollView>
                        {/* Modal de criação e edição */}
            <Modal
                visible={modalVisible}
                animationType="slide"
                transparent
                onRequestClose={closeWorkoutModal}
            >
                <KeyboardAvoidingView
                    style={styles.modalOverlay}
                    behavior={Platform.OS === "ios" ? "padding" : undefined}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalHeader}>
                            <View>
                                <Text style={styles.modalEyebrow}>
                                    SEU TREINO, SUAS ESCOLHAS
                                </Text>

                                <Text style={styles.modalTitle}>
                                    {editingWorkout
                                        ? "Editar treino"
                                        : "Novo treino"}
                                </Text>
                            </View>

                            <TouchableOpacity
                                style={styles.modalCloseButton}
                                onPress={closeWorkoutModal}
                            >
                                <X size={21} color={colors.wine} />
                            </TouchableOpacity>
                        </View>

                        <ScrollView
                            showsVerticalScrollIndicator={false}
                            keyboardShouldPersistTaps="handled"
                        >
                            <Text style={styles.inputLabel}>
                                Nome do treino
                            </Text>

                            <TextInput
    style={styles.modalInput}
    placeholder="Ex.: Treino de pernas"
    placeholderTextColor={colors.textSecondary}
    value={workoutName}
    onChangeText={setWorkoutName}
    maxLength={60}
/>

                           <TextInput
    style={[
        styles.modalInput,
        styles.descriptionInput,
    ]}
    placeholder="Conte um pouco sobre seu treino..."
    placeholderTextColor={colors.textSecondary}
    value={workoutDescription}
    onChangeText={setWorkoutDescription}
    multiline
    textAlignVertical="top"
    maxLength={250}
/>

                            <TextInput
                                style={[
                                    styles.modalInput,
                                    styles.descriptionInput,
                                ]}
                                placeholder="Conte um pouco sobre seu treino..."
                                placeholderTextColor={colors.textSecondary}
                                value={workoutDescription}
                                onChangeText={setWorkoutDescription}
                                multiline
                                textAlignVertical="top"
                                maxLength={250}
                            />

                            <Text style={styles.inputLabel}>
                                Categoria
                            </Text>

                            <View style={styles.modalCategories}>
                                {customCategories.map((category) => (
                                    <TouchableOpacity
                                        key={category}
                                        style={[
                                            styles.modalCategoryButton,
                                            workoutCategory === category &&
                                                styles.modalCategoryActive,
                                        ]}
                                        onPress={() =>
                                            setWorkoutCategory(category)
                                        }
                                    >
                                        <Text
                                            style={[
                                                styles.modalCategoryText,
                                                workoutCategory === category &&
                                                    styles.modalCategoryTextActive,
                                            ]}
                                        >
                                            {category}
                                        </Text>
                                    </TouchableOpacity>
                                ))}
                            </View>

                            <Text style={styles.inputLabel}>
                                Dias programados
                            </Text>

                            <Text style={styles.daysDescription}>
                                Selecione os dias em que pretende realizar
                                este treino.
                            </Text>

                            <View style={styles.daysContainer}>
                                {weekDays.map((day) => {
                                    const selected = selectedDays.includes(
                                        day.value
                                    );

                                    return (
                                        <TouchableOpacity
                                            key={day.value}
                                            style={[
                                                styles.dayButton,
                                                selected &&
                                                    styles.dayButtonSelected,
                                            ]}
                                            onPress={() =>
                                                toggleWorkoutDay(day.value)
                                            }
                                        >
                                            <Text
                                                style={[
                                                    styles.dayButtonText,
                                                    selected &&
                                                        styles.dayButtonTextSelected,
                                                ]}
                                            >
                                                {day.label}
                                            </Text>
                                        </TouchableOpacity>
                                    );
                                })}
                            </View>

                            <View style={styles.modalFooter}>
                                <TouchableOpacity
                                    style={styles.cancelButton}
                                    onPress={closeWorkoutModal}
                                    disabled={saving}
                                >
                                    <Text style={styles.cancelButtonText}>
                                        Cancelar
                                    </Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={[
                                        styles.saveButton,
                                        saving && styles.saveButtonDisabled,
                                    ]}
                                    onPress={handleSaveWorkout}
                                    disabled={saving}
                                    activeOpacity={0.8}
                                >
                                    {saving ? (
                                        <ActivityIndicator
                                            size="small"
                                            color="#FFFFFF"
                                        />
                                    ) : (
                                        <>
                                            <CheckCircle2
                                                size={17}
                                                color="#FFFFFF"
                                            />

                                            <Text style={styles.saveButtonText}>
                                                {editingWorkout
                                                    ? "Salvar alterações"
                                                    : "Salvar treino"}
                                            </Text>
                                        </>
                                    )}
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </KeyboardAvoidingView>
            </Modal>
                        {/* Modal de mensagens e confirmações */}
            <Modal
                visible={dialog.visible}
                transparent
                animationType="fade"
                onRequestClose={closeDialog}
            >
                <View style={styles.dialogOverlay}>
                    <View style={styles.dialogContainer}>
                        <View style={styles.dialogIcon}>
                            {dialog.type === "success" ? (
                                <CheckCircle2
                                    size={32}
                                    color="#72977D"
                                />
                            ) : dialog.type === "error" ? (
                                <AlertCircle
                                    size={32}
                                    color="#B45B70"
                                />
                            ) : dialog.type === "warning" ||
                              dialog.type === "confirm" ? (
                                <AlertCircle
                                    size={32}
                                    color="#C18B55"
                                />
                            ) : (
                                <Info
                                    size={32}
                                    color={colors.wine}
                                />
                            )}
                        </View>

                        <Text style={styles.dialogTitle}>
                            {dialog.title}
                        </Text>

                        <Text style={styles.dialogMessage}>
                            {dialog.message}
                        </Text>

                        <View style={styles.dialogActions}>
                            {dialog.type === "confirm" && (
                                <TouchableOpacity
                                    style={styles.dialogCancelButton}
                                    onPress={closeDialog}
                                >
                                    <Text style={styles.dialogCancelText}>
                                        Cancelar
                                    </Text>
                                </TouchableOpacity>
                            )}

                            <TouchableOpacity
                                style={styles.dialogConfirmButton}
                                onPress={confirmDialogAction}
                                activeOpacity={0.8}
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