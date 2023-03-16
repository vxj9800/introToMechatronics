#include <stdio.h>
#include <pico/stdlib.h>
#include <hardware/gpio.h>

#define ARDU_IN 20
#define ARDU_OUT 21
#define LED_PIN 25

void handleGpioIRQ(uint gpio, uint32_t eventMask)
{
    if (gpio_get(ARDU_IN))
        gpio_put(LED_PIN,1);
    else
        gpio_put(LED_PIN,0);
}

void setup()
{
    stdio_init_all();

    gpio_init(ARDU_IN);
    gpio_init(ARDU_OUT);
    gpio_init(LED_PIN);
    gpio_set_dir(ARDU_IN, 0);
    gpio_set_dir(ARDU_OUT, 1);
    gpio_set_dir(LED_PIN, 1);

    gpio_set_irq_enabled_with_callback(ARDU_IN, GPIO_IRQ_EDGE_FALL | GPIO_IRQ_EDGE_RISE, 1, handleGpioIRQ);
}

void loop()
{
    gpio_put(ARDU_OUT, 0);
    sleep_ms(1000);
    gpio_put(ARDU_OUT, 1);
    sleep_ms(1000);
}

int main()
{
    setup();

    while (true)
        loop();
}