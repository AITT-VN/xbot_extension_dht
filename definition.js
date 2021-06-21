Blockly.Blocks["xbot_dht_sensor_meansure"] = {
  init: function () {
    this.jsonInit({
      colour: "#3F63AD",
      tooltip: "",
      message0: "%3 cập nhập cảm biến DHT cổng %1 chân %2",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1","1"],
            ["2","2"],
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
      colour: "#3F63AD",
      tooltip: "",
      message0: "%4 đọc cảm biến DHT cổng %1 chân %2 %3",
      args0: [
        {
          type: "field_dropdown",
          name: "port",
          options: [
            ["1", "1"],
            ["2", "2"],
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["6", "6"],
          ],
        },
        {
          type: "field_dropdown",
          name: "pin",
          options: [
            ["1","1"],
            ["2","2"],
          ],
        },
        {
          type: "field_dropdown",
          name: "type",
          options: [
            ["nhiệt độ","temperature"],
            ["độ ẩm","humidity"],
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
  Blockly.Python.definitions_['import_DHT'] = "import dht";
  Blockly.Python.definitions_['import_DHT' + port + pin] = "dht11 = dht.DHT11(pin"+ port + pin +")";
  var code = "dht11.measure()\n";
  return code;
};

Blockly.Python["xbot_dht_sensor_read"] = function (block) {
  var port = block.getFieldValue("port");
  var pin = block.getFieldValue("pin");
  var type = block.getFieldValue("type");
  // TODO: Assemble Python into code variable.
  var code = "dht11." + type ;
  return [code, Blockly.Python.ORDER_NONE];
};

