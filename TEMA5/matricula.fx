import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.layout.*;
import javafx.stage.Stage;

public class MatriculaEntrenadora extends Application {

    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("Gestión de Matrícula - Curso de Entrenadora");

        // Asignaturas del curso de entrenadora
        CheckBox comportamientoDeportivo = new CheckBox("MED-C101: Bases del comportamiento deportivo (20 horas)");
        CheckBox primerosAuxilios = new CheckBox("MED-C102: Primeros Auxilios (30 horas)");
        CheckBox actividadAdaptada = new CheckBox("MED-C103: Actividad física adaptada y discapacidad (5 horas)");
        CheckBox organizacionDeportiva = new CheckBox("MED-C104: Organización Deportiva");

        // Horas semanales
        Spinner<Integer> horasSemanales = new Spinner<>(1, 40, 1);

        // Antiguo alumno y altoRendimiento
        CheckBox afiliadoFAG = new CheckBox("Afiliado FAG");
        CheckBox altoRendimiento = new CheckBox("Alto Rendimiento");

        // Botón para calcular
        Button calcularButton = new Button("Calcular Precio");

        // Labels de resultados
        Label precioTotal = new Label("Total: ");
        Label precioConAltoRendimiento = new Label("Con Alto Rendimiento: ");
        Label errorLabel = new Label();
        errorLabel.setStyle("-fx-text-fill: red;");

        calcularButton.setOnAction(e -> {
            errorLabel.setText(""); // pa porsi hay error de antes

            // Calculamos el precio base según las horas seleccionadas (20€ la hora).
            double precio = horasSemanales.getValue() * 20.0;

            // Si esta en la fag ps hay un 35 de descuento
            if (afiliadoFAG.isSelected()) {
                precio *= 0.65;
            }

            // Si tiene altoRendimiento, se aplica un 80% de descuento (paga solo el 20% del total).
            double precioAlto Rendimiento = altoRendimiento.isSelected() ? precio * 0.2 : precio;

            // Actualizamos los textos de los labels.
            precioTotal.setText("Total: " + String.format("%.2f", precio) + " €");
            precioConAltoRendimiento.setText("Con Alto Rendimiento: " + String.format("%.2f", precioAlto Rendimiento) + " €");
        });

        // Layout
        VBox layout = new VBox(10, comportamientoDeportivo, primerosAuxilios, actividadAdaptada, organizacionDeportiva,
                new Label("Horas semanales:"), horasSemanales,
                afiliadoFAG, altoRendimiento, calcularButton, precioTotal, precioConAltoRendimiento, errorLabel);
        layout.setPadding(new Insets(15));

        Scene scene = new Scene(layout, 400, 500);
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
