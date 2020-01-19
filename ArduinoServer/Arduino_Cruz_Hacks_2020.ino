#include <Wire.h>
#include "Adafruit_VEML6070.h"

Adafruit_VEML6070 uv = Adafruit_VEML6070();

void setup() {
  Serial.begin(9600);
  Serial.println("VEML6070 Test");
  uv.begin(VEML6070_4_T);  // pass in the integration time constant
}

void loop() {
  int uvIndex = uv.readUV()/1000; // to get the proper index value, divide by 1000

  Serial.println(uvIndex);
  
  delay(8500);
}
