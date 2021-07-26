Blockly.Blocks["xbot_dht_sensor_meansure"] = {
  init: function () {
    this.jsonInit({
      colour: "#ae00ae",
      tooltip: "",
      message0: "%3 cập nhập cảm biến DHT cổng %1 pin %2",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "0"],
            ["2", "1"],
            ["3", "2"],
            ["4", "3"],
            ["5", "4"],
            ["6", "5"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1","0"],
            ["2","1"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/5xg61Ct/temp-humi.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      previousStatement: null,
      nextStatement: null,
      helpUrl: "",
    });
  },
};

Blockly.Blocks["xbot_dht_sensor_read"] = {
  init: function () {
    this.jsonInit({
      colour: "#ae00ae",
      tooltip: "",
      message0: "%4 đọc cảm biến DHT cổng %1 pin %2 %3",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "0"],
            ["2", "1"],
            ["3", "2"],
            ["4", "3"],
            ["5", "4"],
            ["6", "5"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1","0"],
            ["2","1"],
          ],
        },
        {
          type: "field_dropdown",
          name: "type",
          options: [
            ["nhiệt độ","temperature()"],
            ["độ ẩm","humidity()"],
          ],
        },
        {
          "type": "field_image",
          "src": "https://i.ibb.co/5xg61Ct/temp-humi.png",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        }
      ],
      output: "Number",
      helpUrl: "",
    });
  },
};

// PYTHON
Blockly.Python["xbot_dht_sensor_meansure"] = function (block) {
  var port = block.getFieldValue("port");
  var pin = block.getFieldValue("pin");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_dht'] = "import dht";
  Blockly.Python.definitions_['import_DHT' + port + pin] = "dht11 = dht.DHT11(Pin(PORTS_DIGITAL[" + port + "][" + pin + "]))";
  var code = "dht11.measure()\n";
  return code;
};

Blockly.Python["xbot_dht_sensor_read"] = function (block) {
  var port = block.getFieldValue("port");
  var pin = block.getFieldValue("pin");
  var type = block.getFieldValue("type");
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_DHT'] = "import dht";
  Blockly.Python.definitions_['import_DHT' + port + pin] = "dht11 = dht.DHT11(Pin(PORTS_DIGITAL[" + port + "][" + pin + "]))";
  var code = "dht11." + type ;
  return [code, Blockly.Python.ORDER_NONE];
};

