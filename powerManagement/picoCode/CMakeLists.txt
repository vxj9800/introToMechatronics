cmake_minimum_required(VERSION 3.13)
set(ENV{PICO_SDK_PATH} "~/pico/pico-sdk/")
include(pico_sdk_import.cmake)
project(ledIRQ C CXX ASM)

set(CMAKE_C_STANDARD 11)
set(CMAKE_CXX_STANDARD 17)
pico_sdk_init()

add_executable(ledIRQ
  ledIRQ.cpp
)
pico_add_extra_outputs(ledIRQ)

pico_enable_stdio_usb(ledIRQ 1)
pico_enable_stdio_uart(ledIRQ 0)
target_link_libraries(ledIRQ pico_stdlib hardware_gpio)
