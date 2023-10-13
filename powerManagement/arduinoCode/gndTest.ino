#define OUT_PIN 18
#define IN_PIN 19
#define LED_PIN 13

void setup() {
  pinMode(IN_PIN,INPUT);
  pinMode(OUT_PIN,OUTPUT);
  pinMode(LED_PIN,OUTPUT);
  
  attachInterrupt(digitalPinToInterrupt(IN_PIN),handleGpioIRQ,CHANGE);
}

void loop()
{
  digitalWrite(OUT_PIN,LOW);
  delay(1000);
  digitalWrite(OUT_PIN,HIGH);
  delay(1000);
}

void handleGpioIRQ()
{
  if (digitalRead(IN_PIN))
    digitalWrite(LED_PIN,LOW);
  else
    digitalWrite(LED_PIN,HIGH);
}