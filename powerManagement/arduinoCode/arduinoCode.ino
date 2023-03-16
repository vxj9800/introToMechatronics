#define PICO_IN 20
#define PICO_OUT 21
#define LED_PIN 13

void setup() {
  pinMode(PICO_IN,INPUT_PULLUP);
  pinMode(PICO_OUT,OUTPUT);
  pinMode(LED_PIN,OUTPUT);
  
  attachInterrupt(digitalPinToInterrupt(PICO_IN),handleGpioIRQ,CHANGE);
}

void loop()
{
  digitalWrite(PICO_OUT,LOW);
  delay(100);
  digitalWrite(PICO_OUT,HIGH);
  delay(100);
}

void handleGpioIRQ()
{
  if (digitalRead(PICO_IN))
    digitalWrite(LED_PIN,LOW);
  else
    digitalWrite(LED_PIN,HIGH);
}