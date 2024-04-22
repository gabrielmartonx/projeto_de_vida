//Variáveis
private Timer timer;
private int currentSegundo = 0;
private int currentMinuto = 0;
private int currentHora = 0;
private int velocidade = 1000;

//Construtor da tela que inicia o método
public viewEMB_MesaBip() {
    initComponents();
    iniciarCronometro(lblCronometro);//Aqui está o método do cronômetro
}

//Botão INICIAR
private void btnIniciarActionPerformed(java.awt.event.ActionEvent evt) {
timer.restart();//Inicia a Thread do método para que o cronômetro rode
}

//Metodo CRONOMETRO (AQUI PRECISO DE AJUDA PARA SER REGRESSIVO)
private void iniciarCronometro(JLabel label) {
    ActionListener action = new ActionListener() {
        public void actionPerformed(ActionEvent e) {
            currentSegundo++;
            if (currentSegundo == 60) {
                currentMinuto++;
                currentSegundo = 0;
            }
            if (currentMinuto == 60) {
                currentHora++;
                currentMinuto = 0;
            }
            String hr = currentHora <= 9 ? "0" + currentHora : currentHora + "";
            String min = currentMinuto <= 9 ? "0" + currentMinuto : currentMinuto + "";
            String seg = currentSegundo <= 9 ? "0" + currentSegundo : currentSegundo + "";
            label.setText(hr + ":" + min + ":" + seg);
        }
    };
    this.timer = new Timer(velocidade, action);
    this.timer.start();
}

//Metodo para parar o cronometro
private void zerarCronometro(JLabel label) {
    timer.stop();
    currentHora = 0;
    currentMinuto = 0;
    currentSegundo = 0;
    label.setText("00:00:00");