public class MATRICULA extends Application {
    @Override
    public void start(Stage primaryStage) {
        primaryStage.setTitle("MATRICULA CURSO DE ENTRENADORA");
    }
}
CheckBox comportamientoDeportivo = new CheckBox("MED-C101: Bases del comportamiento deportivo (20 horas)");
CheckBox primerosAuxilios = new CheckBox("MED-C102: Primeros Auxilios (30 horas)");
CheckBox actividadAdaptada = new CheckBox("MED-C103: Actividad física adaptada y discapacidad (5 horas)");
CheckBox organizacionDeportiva = new CheckBox("MED-C104: Organización Deportiva");

Spinner<Integer> horasSemanales = new Spinner<>(1, 40, 1);

CheckBox afiliadofag = new CheckBox("Alumno afiliado al FAG");
CheckBox altorendimiento = new CheckBox("Alto Rendimiento");

Button calcularButton = new Button("Calcular Precio");

Label precioTotal = new Label("Total: ");
Label precioaltorendimiento = new Label("Con alto Rendimiento: ");
Label precioafiliado = new Label("Con afiliado al FAG: ");

TextField precio = new TextField();
Label errorLabel = new Label();
errorLabel.setStyle("-fx-text-fill: red;");

calcularButton.setOnAction(e -> {
    errorLabel.setText(""); // pa porsi ai algun error
    
    // Calculamos el precio base según las horas seleccionadas (20€ la hora).
    double precio = horasSemanales.getValue() * 20.0;

    // si esta en la fag ps hay un 35 de descuento    if (antiguoAlumno.isSelected()) {
        precio *= 0.65;
    }

    // Si tiene beca, se aplica un 80% de descuento (paga solo el 20% del total).
    double precioBeca = beca.isSelected() ? precio * 0.2 : precio;

    // Actualizamos los textos de los labels.
    precioTotal.setText("Total: " + String.format("%.2f", precio) + " €");
    precioaltorendimiento.setText("con alto rendimiento : " + String.format("%.2f", precioaltorendimiento) + " €");
});

