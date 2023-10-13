#include <stdio.h>
#include <pico/stdlib.h>
#include <hardware/gpio.h>

#define OUT_PIN 18
#define IN_PIN 19
#define LED_PIN 25

void handleGpioIRQ(uint gpio, uint32_t eventMask)
{
    if (gpio_get(IN_PIN))
        gpio_put(LED_PIN,1);
    else
        gpio_put(LED_PIN,0);
}

void setup()
{
    stdio_init_all();

    gpio_init(IN_PIN);
    gpio_init(OUT_PIN);
    gpio_init(LED_PIN);
    gpio_set_dir(IN_PIN, 0);
    gpio_set_dir(OUT_PIN, 1);
    gpio_set_dir(LED_PIN, 1);

    gpio_set_irq_enabled_with_callback(IN_PIN, GPIO_IRQ_EDGE_FALL | GPIO_IRQ_EDGE_RISE, 1, handleGpioIRQ);
}

void loop()
{
    gpio_put(OUT_PIN, 0);
    sleep_ms(1000);
    gpio_put(OUT_PIN, 1);
    sleep_ms(1000);
}

int main()
{
    setup();

    while (true)
        loop();
}