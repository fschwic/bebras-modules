﻿//"use strict";

preloadedimages = {}

// This is a template of library for use with quickAlgo.
var getContext = function (display, infos, curLevel) {
    // Local language strings for each language
    var introControls = null;
    var localLanguageStrings = {
        fr: { // French strings
            label: {
                // Labels for the blocks
                turnLedOn: "Allumer la LED",
                turnLedOff: "Éteindre la LED",
                buttonState: "bouton enfoncé",
                buttonStateInPort: "bouton enfoncé sur le port %1",
                waitForButton: "Attendre le bouton",
                buttonWasPressed: "Le bouton a été enfoncé",
                changeLedState: "Passer la LED à %2 sur le port %1",
                toggleLedState: "Inverser la LED sur le port %1",
                displayText: "Afficher à l'écran Ligne 1: %1 Ligne 2: %2",
                readTemperature: "température ambiante",
                sleep: "Mettre le programme en pause pendant %1 secondes",
                setServoAngle: "Mettre le servo à l'angle %2 sur le port %1",
                readRotaryAngle: "état du potentiomètre",
                readDistance: "distance lue par le capteur à ultrasons",
                readLightIntensity: "Intensité lumineuse",
                readHumidity: "l'humidité ambiante",
                currentTime: "current time",
                /*turnLedOn: "Turn Led On",
                turnLedOff: "Turn Led Off",
                buttonState: "Return Button State",
                buttonStateInPort: "Return Button State in port %1",
                waitForButton: "Wait for button",
                buttonWasPressed: "Was button pressed",
                changeLedState: "Turn led %2 in port %1",
                toggleLedState: "Toggle led state in port %1",
                displayText: "Display in screen Line 1: %1 Line 2: %2",
                readTemperature: "Read Ambient temperature",
                sleep: "Pause program for %1 seconds",
                setServoAngle: "Set servo to %2 angle in port %1",
                readRotaryAngle: "Read state of potentiometer",
                readDistance: "Read distance using the ultrasonic sensor"*/
            },
            code: {
                // Names of the functions in Python, or Blockly translated in JavaScript
                turnLedOn: "turnLedOn",
                turnLedOff: "turnLedOff",
                buttonState: "buttonState",
                buttonStateInPort: "buttonStateInPort",
                waitForButton: "waitForButton",
                buttonWasPressed: "buttonWasPressed",
                changeLedState: "changeLedState",
                toggleLedState: "toggleLedState",
                displayText: "displayText",
                readTemperature: "readTemperature",
                sleep: "sleep",
                setServoAngle: "setServoAngle",
                readRotaryAngle: "readRotaryAngle",
                readDistance: "readDistance",
                readLightIntensity: "readLightIntensity",
                readHumidity: "readHumidity",
                currentTime: "currentTime",
            },
            description: {
                // Descriptions of the functions in Python (optional)
                turnLedOn: "turnLedOn(): Turns on a light connected to Raspberry",
                turnLedOff: "turnLedOff(): Turns off a light connected to Raspberry",
                buttonState: "buttonState(): Returns the state of a button, Pressed means True and not pressed means False",
                buttonStateInPort: "buttonStateInPort(): Returns the state of a button, Pressed means True and not pressed means False",
                waitForButton: "waitForButton(): Stops program execution until a button is pressed",
                buttonWasPressed: "buttonWasPressed(): Returns true if the button has been pressed and will clear the value",
                changeLedState: "changeLedState(): Change led state in the given port",
                toggleLedState: "toggleLedState(): Toggles the led state",
                displayText: "displayText(): Display text in LCD screen",
                readTemperature: "readTemperature(): Read Ambient temperature",
                sleep: "sleep(): pause program execute for a number of seconds",
                setServoAngle: "setServoAngle(): Set servo motor to an specified angle",
                readRotaryAngle: "readRotaryAngle(): Read state of potentiometer",
                readDistance: "readDistance(): Read distance using ultrasonic sensor",
                readLightIntensity: "readLightIntensity(): Read light intensity",
                readHumidity: "readHumidity(): lire l'humidité ambiante",
                currentTime: "currentTime(): returns current time",
            },
            constant: {
            },

            startingBlockName: "Programme", // Name for the starting block
            messages: {
                sensorNotFound: "Tried to use a non existing sensor.",
                manualTestSuccess: "Manual test validated automatically.",
                testSuccess: "Bravo ! La sortie est correcte",
                wrongState: "Test failed, reached wrong state.",
                programEnded: "programme terminé.",
                piPlocked: "appareil est verrouillé. Déverrouillez ou redémarrez.",
                cantConnect: "Impossible de se connecter à l'appareil.",
                sensorInOnlineMode: "Vous ne pouvez pas agir sur les capteurs en mode connecté.",
                cantConnectoToUSB: "Aucun appareil n'est connecté en USB",
                cantConnectoToBT: "Aucun appareil n'est connecté en Bluetooth",
                canConnectoToUSB: "Connecté en USB.",
                canConnectoToBT: "Connecté en Bluetooth.",
                connectionHTML: `
                <div id="piui">
                    <button type="button" id="piconnect" class="btn">
                        <span class="fa fa-wifi"></span><span id="piconnecttext" class="btnText">Connecter</span> <span id="piconnectprogress" class="fas fa-spinner fa-spin"></span>
                    </button>
    
                    <span id="piinstallui">
                        <span class="fa fa-exchange-alt"></span>
                        <button type="button" id="piinstall" class="btn">
                            <span class="fa fa-upload"></span><span>Installer</span><span id=piinstallprogresss class="fas fa-spinner fa-spin"></span><span id="piinstallcheck" class="fa fa-check"></span>
                        </button>
                    </span>
                </div>`,
                connectionDialogHTML: `
                <div class="content connectPi">
                    <div class="panel-heading">
                        <h2 class="sectionTitle">
                            <span class="iconTag"><i class="icon fas fa-list-ul"></i></span>
                            Accès — Sélection IOI — 2018
                        </h2>
                        <div class="exit" id="picancel"><i class="icon fas fa-times"></i></div>
                    </div>
                    <div class="panel-body">
                        <div class="switchRadio btn-group" id="piconsel">
                            <button type="button" class="btn active" id="piconwifi"><i class="fa fa-wifi icon"></i>WiFi</button>
                            <button type="button" class="btn" id="piconusb"><i class="fab fa-usb icon"></i>USB</button>
                            <button type="button" class="btn" id="piconbt"><i class="fab fa-bluetooth-b icon"></i>Bluetooth</button>
                        </div>
                        <div id="pischoolcon">
                            <div class="form-group">
                                <label id="pischoolkeylabel">Indiquez un identifiant d'école</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">Aa</div>
                                    <input type="text" id="schoolkey" class="form-control">
                                </div>
                            </div>
                            <div class="form-group">
                                <label id="pilistlabel">Sélectionnez un appareil à connecter dans la liste suivante</label>
                                <div class="input-group">
                                    <button class="input-group-prepend" id=pigetlist disabled>Get list</button>
                                    <select id="pilist" class="custom-select" disabled>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label id="piiplabel">ou entrez son adesse IP</label>
                                <div class="input-group">
                                    <div class="input-group-prepend">123</div>
                                    <input id=piaddress type="text" class="form-control">
                                </div>
                            </div>
                        </div>
                        <div panel-body-usbbt>
                            <label id="piconnectionlabel">Aucun appareil n'est connecté en USB</label>
                        </div>
    
                        <div class="inlineButtons">
                            <button id="piconnectok" class="btn"><i class="fa fa-wifi icon"></i>Connecter l'appareil</button>
                            <button id="pirelease" class="btn"><i class="fa fa-times icon"></i>Déconnecter</button>
                        </div>
                    </div>
                </div>
                `,
            }
        },
        none: {
            comment: {
                // Comments for each block, used in the auto-generated documentation for task writers
                turnLedOn: "Turns on a light connected to Raspberry",
                turnLedOff: "Turns off a light connected to Raspberry",
                buttonState: "Returns the state of a button, Pressed means True and not pressed means False",
                waitForButton: "Stops program execution until a button is pressed",
                buttonWasPressed: "Returns true if the button has been pressed and will clear the value",
                changeLedState: "Change led state in the given port",
                toggleLedState: "If led is on, turns it off, if it's off turns it on",
                buttonStateInPort: "Returns the state of a button, Pressed means True and not pressed means False",
                displayText: "Display text in LCD screen",
                readTemperature: "Read Ambient temperature",
                sleep: "pause program execute for a number of seconds",
                setServoAngle: "Set servo motor to an specified angle",
                readRotaryAngle: "Read state of potentiometer",
                readDistance: "Read distance using ultrasonic sensor",
                readLightIntensity: "Read light intensity",
                readHumidity: "lire l'humidité ambiante",
                currentTime: "returns current time",
            }
        }
    }

    // Create a base context
    var context = quickAlgoContext(display, infos);
    // Import our localLanguageStrings into the global scope
    var strings = context.setLocalLanguageStrings(localLanguageStrings);


    // Some data can be made accessible by the library through the context object
    context.quickpi = {};

    context.TASK_FAILED = 0;
    context.TASK_SUCCEEDED = 1;
    context.TASK_ONGOING = 2;

    var lockstring;
    if (sessionStorage.lockstring)
        lockstring = sessionStorage.lockstring;
    else {
        lockstring = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        sessionStorage.lockstring = lockstring;
    }


    context.quickPiConnection = getQuickPiConnection(lockstring, raspberryPiConnected, raspberryPiDisconnected);
    var orange = false;
    var paper;
    context.offLineMode = true;

    context.onExecutionEnd = function () {

    };

    infos.checkEndEveryTurn = true;
    infos.checkEndCondition = function (context, lastTurn) {

        if (!context.display && !context.autoGrading) {
            context.success = true;
            throw (strings.messages.manualTestSuccess);
        }

        if (context.autoGrading) {
            for (sensorStates in context.gradingStatesBySensor) {
                for (var i = 0; i < context.gradingStatesBySensor[sensorStates].length; i++) {
                    var state = context.gradingStatesBySensor[sensorStates][i];

                    if (state.time < context.currentTime) {
                        if (!state.hit) {
                            context.success = false;
                            throw (strings.messages.wrongState);
                        }
                    }
                    else {
                        if (lastTurn) {
                            context.success = false;
                            throw (strings.messages.wrongState);
                        }
                    }
                }
            }

            if (lastTurn) {
                context.success = true;
                context.doNotStartGrade = false;
                throw (strings.messages.programEnded);
            }
        } else {
            if (!context.offLineMode) {
                $('#piinstallcheck').hide();
            }

            if (lastTurn) {
                context.success = false;
                if (context.autoGrading)
                    context.doNotStartGrade = false;
                else
                    context.doNotStartGrade = true;

                throw (strings.messages.programEnded);
            }
        }
    };

    context.reset = function (taskInfos) {
        if (!context.offLineMode) {
            $('#piinstallcheck').hide();
            context.quickPiConnection.startNewSession();
        }

        if (taskInfos != undefined) {
            // Instructions that have been called without
            // ever getting into a quickpi block
            context.piLessInstructions = 0;

            context.currentTime = 0;
            context.autoGrading = taskInfos.autoGrading;
            if (context.autoGrading) {
                context.gradingInput = taskInfos.input;
                context.gradingOutput = taskInfos.output;
                context.maxTime = 0;
                context.tickIncrease = 100;

                if (context.gradingInput)
                    context.gradingStatesByTime = context.gradingInput.concat(context.gradingOutput);
                else
                    context.gradingStatesByTime = context.gradingOutput;

                context.gradingStatesByTime.sort(function (a, b) { return a.time - b.time; });

                context.gradingStatesBySensor = {};

                for (var i = 0; i < context.gradingStatesByTime.length; i++) {
                    var state = context.gradingStatesByTime[i];
                    var key = state.type.toUpperCase() + state.port.toUpperCase();

                    if (!context.gradingStatesBySensor.hasOwnProperty(key))
                        context.gradingStatesBySensor[key] = [];

                    context.gradingStatesBySensor[key].push(state);
                    state.hit = false;

                    if (state.time > context.maxTime)
                        context.maxTime = state.time;
                }
            }
        }

        for (var iSensor = 0; iSensor < infos.quickPiSensors.length; iSensor++) {
            var sensor = infos.quickPiSensors[iSensor];

            sensor.state = null;
            sensor.lastState = 0;
            sensor.lastStateChange = null;
            sensor.callsInTimeSlot = 0;
            sensor.lastTimeIncrease = 0;
        }

        if (context.display) {
            context.resetDisplay();
        } else {
            // Initialize success to
            // -True if it's a manual test (we consider it's always a success)
            // -False if it's an automatic test (it changes to True if it's a success)
            context.success = !context.autoGrading;
        }

        context.liveUpdateCount = 0;
        context.sensorPollInterval = setInterval(function () {
            if ((!context.runner || !context.runner.isRunning())
                && !context.offLineMode) {

                if (context.liveUpdateCount == 0) {
                    for (var iSensor = 0; iSensor < infos.quickPiSensors.length; iSensor++) {
                        var sensor = infos.quickPiSensors[iSensor];

                        updateLiveSensor(sensor);
                    }
                }
            }
        }, 200);
    };

    function updateLiveSensor(sensor) {
        if (findSensorDefinition(sensor).isSensor && findSensorDefinition(sensor).getLiveState) {
            context.liveUpdateCount++;

            findSensorDefinition(sensor).getLiveState(sensor.port, function (returnVal) {
                context.liveUpdateCount--;
                sensor.state = returnVal;
                drawSensor(sensor);
            });
        }

    }


    function findSensorDefinition(sensor) {
        return sensorDefinitions.find(function (element) {
            if (sensor.type == element.name)
                return element;
        })
    }


    sensorDefinitions = [
        /******************************** */
        /*             Actuators          */
        /**********************************/
        {
            name: "led",
            isAnalog: false,
            isSensor: false,
            portType: "D",
            selectorImages: ["ledoff.png"],
            getPercentageFromState: function (state) {
                if (state)
                    return 1;
                else
                    return 0;
            },
            getStateFromPercentage: function (percentage) {
                if (percentage)
                    return 1;
                else
                    return 0;
            },
            compareState: function (state1, state2) {
                return state1 == state2;
            },
            setLiveState: function (state) {

            }
        },
        {
            name: "servo",
            isAnalog: true,
            isSensor: false,
            portType: "D",
            selectorImages: ["servo.png", "servo-pale.png", "servo-center.png"],
            getPercentageFromState: function (state) {
                return state / 180;
            },
            getStateFromPercentage: function (percentage) {
                return Math.round(percentage * 180);
            },
            compareState: function (state1, state2) {
                return state1 == state2;
            },
        },
        {
            name: "screen",
            isAnalog: false,
            isSensor: false,
            doubleWidth: true,
            portType: "i2c",
            selectorImages: ["screen.png"],
            compareState: function (state1, state2) {
                // Both are null are equal
                if (state1 == null && state2 == null)
                    return true;

                // If only one is null they are different
                if ((state1 == null && state2) ||
                    (state1 && state2 == null))
                    return false;

                // Otherwise compare the strings
                return state1.line1 == state2.line1 &&
                    state1.line2 == state2.line2;
            },
        },
        /******************************** */
        /*             sensors            */
        /**********************************/
        {
            name: "button",
            isAnalog: false,
            isSensor: true,
            portType: "D",
            selectorImages: ["buttonoff.png"],
            getPercentageFromState: function (state) {
                if (state)
                    return 1;
                else
                    return 0;
            },
            getStateFromPercentage: function (percentage) {
                if (percentage)
                    return 1;
                else
                    return 0;
            },
            compareState: function (state1, state2) {
                return state1 == state2;
            },
            getLiveState: function (port, callback) {
                context.quickPiConnection.sendCommand("buttonStateInPort(" + port.substring(1) + ")", function (retVal) {
                    callback(retVal != "0");
                });
            },
        },
        {
            name: "temperature",
            isAnalog: true,
            isSensor: true,
            portType: "A",
            selectorImages: ["temperature-hot.png", "tempteature-overlay.png"],
            getPercentageFromState: function (state) {
                return state / 60;
            },
            getStateFromPercentage: function (percentage) {
                return Math.round(percentage * 60);
            },
            compareState: function (state1, state2) {
                return state1 == state2;
            },
            getLiveState: function (port, callback) {
                context.quickPiConnection.sendCommand("readTemperature(" + port.substring(1) + ")", callback);
            },
        },
        {
            name: "potentiometer",
            isAnalog: true,
            isSensor: true,
            portType: "A",
            selectorImages: ["potentiometer.png", "potentiometer-pale.png"],
            getPercentageFromState: function (state) {
                return state / 100;
            },
            getStateFromPercentage: function (percentage) {
                return Math.round(percentage * 100);
            },
            compareState: function (state1, state2) {
                return state1 == state2;
            },
            getLiveState: function (port, callback) {
                context.quickPiConnection.sendCommand("readRotaryAngle(" + port.substring(1) + ")", callback);
            },
        },
        {
            name: "light",
            isAnalog: true,
            isSensor: true,
            portType: "A",
            selectorImages: ["light.png"],
            getPercentageFromState: function (state) {
                return state / 100;
            },
            getStateFromPercentage: function (percentage) {
                return Math.round(percentage * 100);
            },
            compareState: function (state1, state2) {
                return state1 == state2;
            },
            getLiveState: function (port, callback) {
                context.quickPiConnection.sendCommand("readLightIntensity(" + port.substring(1) + ")", callback);
            },
        },
        {
            name: "range",
            isAnalog: true,
            isSensor: true,
            portType: "D",
            selectorImages: ["range.png"],
            getPercentageFromState: function (state) {
                return state / 500;
            },
            getStateFromPercentage: function (percentage) {
                return Math.round(percentage * 500);
            },
            compareState: function (state1, state2) {
                return state1 == state2;
            },
            getLiveState: function (port, callback) {
                context.quickPiConnection.sendCommand("readDistance(" + port.substring(1) + ")", callback);
            },
        },
        {
            name: "humidity",
            isAnalog: true,
            isSensor: true,
            portType: "D",
            selectorImages: ["humidity.png"],
            getPercentageFromState: function (state) {
                return state / 100;
            },
            getStateFromPercentage: function (percentage) {
                return Math.round(percentage * 100);
            },
            compareState: function (state1, state2) {
                return state1 == state2;
            },
            getLiveState: function (port, callback) {
                context.quickPiConnection.sendCommand("readHumidity(" + port.substring(1) + ")", callback);
            },
        },
    ];


    // Reset the context's display
    context.resetDisplay = function () {
        // Do something here
        //$('#grid').html('Display for the library goes here.');

        // Ask the parent to update sizes
        //context.blocklyHelper.updateSize();
        //context.updateScale();
        var piUi = strings.messages.connectionHTML;

        var hasIntroControls = $('#taskIntro').find('#introControls').length;
        if (!hasIntroControls) {
            $('#taskIntro').append(`<div id="introControls"></div>`);
        }
        if (introControls === null) {
            introControls = piUi + $('#introControls').html();
        }
        $('#introControls').html(introControls)
        $('#taskIntro').addClass('piui');

        $('#grid').html(`
            <div id="virtualSensors" style="height: 90%; width: 90%; padding: 5px;">
            </div>
             `
        );

        this.raphaelFactory.destroyAll();
        paper = this.raphaelFactory.create("paperMain", "virtualSensors", $('#virtualSensors').width(), $('#virtualSensors').height());

        var quickPiSensors = infos.quickPiSensors;
        if (!Array.isArray(infos.quickPiSensors)) {
            quickPiSensors = infos.quickPiSensors;
        }

        if (context.autoGrading) {
            var numSensors = infos.quickPiSensors.length;
            var sensorSize = Math.min(paper.height / numSensors * 0.80, paper.width / 10);

            context.sensorSize = sensorSize * .90;

            context.timelineStartx = context.sensorSize * 3;

            var maxTime = context.maxTime;
            if (maxTime == 0)
                maxTime = 1000;

            context.pixelsPerTime = (paper.width - context.timelineStartx - 10) / maxTime;

            for (var iSensor = 0; iSensor < infos.quickPiSensors.length; iSensor++) {
                var sensor = infos.quickPiSensors[iSensor];

                sensor.drawInfo = {
                    x: 0,
                    y: 10 + (sensorSize * iSensor),
                    width: sensorSize * .90,
                    height: sensorSize * .90
                }

                drawSensor(sensor);
                drawTimeLine();

                var key = sensor.type.toUpperCase() + sensor.port.toUpperCase();
                if (context.gradingStatesBySensor.hasOwnProperty(key)) {
                    var states = context.gradingStatesBySensor[key];
                    var startTime = 0;
                    var lastState = null;
                    sensor.lastAnalogState = null;

                    for (var iState = 0; iState < states.length; iState++) {
                        var state = states[iState];

                        drawSensorTimeLineState(sensor, lastState, startTime, state.time, "expected");

                        startTime = state.time;
                        lastState = state.state;
                    }

                    sensor.lastAnalogState = null;
                }
            }
        } else {

            var hasdoublewitdh = false;
            var nSensors = quickPiSensors.length;

            quickPiSensors.forEach(function (sensor) {
                if (findSensorDefinition(sensor).doubleWidth) {
                    hasdoublewitdh = true;
                    nSensors++;
                }
            });

            if (infos.customSensors)
            {
                nSensors++;
            }


            var geometry = squareSize(paper.width, paper.height, nSensors);

            context.sensorSize = geometry.size * .10;

            var iSensor = 0;

            for (var col = 0; col < geometry.cols; col++) {
                var y = geometry.size * col;

                var line = paper.path(["M", 0,
                    y,
                    "L", paper.width,
                    y]);

                line.attr({
                    "stroke-width": 1,
                    "stroke": "lightgrey",
                    "stroke-linecapstring": "round"
                });

                for (var row = 0; row < geometry.rows; row++) {
                    var x = paper.width / geometry.rows * row;
                    var y1 = y + geometry.size / 4;
                    var y2 = y + geometry.size * 3 / 4;

                    line = paper.path(["M", x,
                        y1,
                        "L", x,
                        y2]);

                    line.attr({
                        "stroke-width": 1,
                        "stroke": "lightgrey",
                        "stroke-linecapstring": "round"
                    });

                    if (iSensor == infos.quickPiSensors.length && infos.customSensors) {
                        drawCustomSensorAdder(x, y, geometry.size);
                    } else if (infos.quickPiSensors[iSensor]) {
                        var sensor = infos.quickPiSensors[iSensor];
                        var doublewitdh = findSensorDefinition(sensor).doubleWidth;

                        if (doublewitdh) {
                            row++;

                            sensor.drawInfo = {
                                x: x,
                                y: y,
                                width: geometry.size * 2,
                                height: geometry.size
                            }
                        } else {
                            sensor.drawInfo = {
                                x: x,
                                y: y,
                                width: geometry.size,
                                height: geometry.size
                            }
                        }

                        drawSensor(sensor);
                    }
                    iSensor++;
                }
            }
        }

        context.blocklyHelper.updateSize();

        context.releasing = false;
        context.offLineMode = true;

        showasReleased();

        if (context.quickPiConnection.isConnecting()) {
            showasConnecting();
        }

        if (context.quickPiConnection.isConnected()) {
            showasConnected();

            context.offLineMode = false;
        }

        $('#piconnect').click(function () {

            window.displayHelper.showPopupDialog(strings.messages.connectionDialogHTML);
             ;

            if (context.offLineMode) {
                $('#piconnectok').attr('disabled', false);
                $('#pirelease').attr('disabled', true);
            }
            else {
                $('#piconnectok').attr('disabled', true);
                $('#pirelease').attr('disabled', false);
            }

            if (context.quickPiConnection.isConnected()) {
                if (sessionStorage.connectionMethod == "USB") {
                    $('#piconwifi').removeClass('active');
                    $('#piconusb').addClass('active');
                    $('#pischoolcon').hide();
                    $('#piaddress').val("192.168.233.1");

                    $('#piconnectok').attr('disabled', true);
                } else if (sessionStorage.connectionMethod == "BT") {
                    $('#piconwifi').removeClass('active');
                    $('#piconbt').addClass('active');
                    $('#pischoolcon').hide();

                    $('#piaddress').val("192.168.233.2");
                    $('#piconnectok').attr('disabled', false);

                    $('#piconnectok').attr('disabled', true);
                }
            }

            if (sessionStorage.pilist) {
                populatePiList(JSON.parse(sessionStorage.pilist));
            }

            if (sessionStorage.raspberryPiIpAddress) {
                $('#piaddress').val(sessionStorage.raspberryPiIpAddress);
            }


            $('#piconnectok').click(function () {
                $('#popupMessage').hide();
                window.displayHelper.popupMessageShown = false;

                var ipaddress = $('#piaddress').val();
                sessionStorage.raspberryPiIpAddress = ipaddress;

                showasConnecting();
                context.quickPiConnection.connect(ipaddress);
            });

            $('#pirelease').click(function () {
                $('#popupMessage').hide();
                window.displayHelper.popupMessageShown = false;

                // IF connected release lock
                context.releasing = true;
                context.quickPiConnection.releaseLock();
            });

            $('#picancel').click(function () {
                $('#popupMessage').hide();
                window.displayHelper.popupMessageShown = false;
            });

            $('#schoolkey').on('input', function (e) {
                var schoolkey = $('#schoolkey').val();

                if (schoolkey)
                    $('#pigetlist').attr("disabled", false);
                else
                    $('#pigetlist').attr("disabled", true);
            });


            $('#pigetlist').click(function () {
                var schoolkey = $('#schoolkey').val();

                fetch('http://www.france-ioi.org/QuickPi/list.php?school=' + schoolkey)
                    .then(function (response) {
                        return response.json();
                    })
                    .then(function (jsonlist) {
                        populatePiList(jsonlist);
                    });
            });

            // Select device connexion methods
            $('#piconsel .btn').click(function () {
                if (!context.quickPiConnection.isConnected()) {
                    if (!$(this).hasClass('active')) {
                        $('#piconsel .btn').removeClass('active');
                        $(this).addClass('active');
                    }
                }
            });

            $('#piconwifi').click(function () {
                if (!context.quickPiConnection.isConnected()) {
                    sessionStorage.connectionMethod = "WIFI";
                    $(this).addClass('active');
                    $('#pischoolcon').show("slow");
                }
            });

            $('#piconusb').click(function () {
                if (!context.quickPiConnection.isConnected()) {
                    sessionStorage.connectionMethod = "USB";
                    $('#piconnectok').attr('disabled', true);
                    $('#piconnectionlabel').text(strings.messages.cantConnectoToUSB)

                    $(this).addClass('active');
                    $('#pischoolcon').hide("slow");

                    context.quickPiConnection.isAvailable("192.168.233.1", function (available) {
                        if (available) {
                            $('#piconnectok').attr('disabled', false);

                            $('#piconnectionlabel').text(strings.messages.canConnectoToUSB)
                        } else {
                            $('#piconnectok').attr('disabled', true);

                            $('#piconnectionlabel').text(strings.messages.cantConnectoToUSB)
                        }
                    });

                    $('#piaddress').val("192.168.233.1");
                }
            });

            $('#piconbt').click(function () {
                if (!context.quickPiConnection.isConnected()) {
                    sessionStorage.connectionMethod = "BT";
                    $('#piconnectok').attr('disabled', true);
                    $('#piconnectionlabel').text(strings.messages.cantConnectoToBT)

                    $(this).addClass('active');
                    $('#pischoolcon').hide("slow");

                    $('#piaddress').val("192.168.233.2");

                    context.quickPiConnection.isAvailable("192.168.233.2", function (available) {
                        if (available) {
                            $('#piconnectok').attr('disabled', false);
                            $('piconnectionlabel').val(strings.messages.canConnectoToBT)
                        } else {
                            $('#piconnectok').attr('disabled', true);
                            $('#piconnectionlabel').text(strings.messages.cantConnectoToBT)
                        }
                    });
                }
            });

            function populatePiList(jsonlist) {
                sessionStorage.pilist = JSON.stringify(jsonlist);

                var select = document.getElementById("pilist");
                var first = true;

                $('#pilist').empty();

                for (var i = 0; i < jsonlist.length; i++) {
                    var pi = jsonlist[i];

                    var el = document.createElement("option");
                    el.textContent = jsonlist[i].name;
                    el.value = jsonlist[i].ip;

                    select.appendChild(el);

                    if (first) {
                        $('#piaddress').val(jsonlist[i].ip);
                        first = false;
                        $('#pilist').prop('disabled', false);
                    }
                }
            }

            $('#pilist').on('change', function () {
                $("#piaddress").val(this.value);
            });
        });

        $('#piinstall').click(function () {
            context.blocklyHelper.reportValues = false;
            python_code = context.blocklyHelper.getCode("python");

            if (context.runner)
                context.runner.stop();

            context.installing = true;
            $('#piinstallprogresss').show();

            context.quickPiConnection.installProgram(python_code, function () {
                context.justinstalled = true;
                $('#piinstallprogresss').hide();
                $('#piinstallcheck').show();
            });
        });


        if (parseInt(sessionStorage.autoConnect)) {
            if (!context.quickPiConnection.isConnected() && !context.quickPiConnection.isConnecting()) {
                $('#piconnect').attr("disabled", true);
                context.quickPiConnection.connect(sessionStorage.raspberryPiIpAddress);
            }
        }
    };

    function drawCustomSensorAdder(x, y, size)
    {
        if (context.sensorAdder) {
            context.sensorAdder.remove();
        }

        var centerx = x + size / 2;
        var centery = y + size / 2;
        var fontsize = size * .70;

        context.sensorAdder = paper.text(centerx, centery, "+");

        context.sensorAdder.attr({ "font-size": fontsize + "px",
                                    fill: "lightgray" });
        context.sensorAdder.node.style = "-moz-user-select: none; -webkit-user-select: none;";

        context.sensorAdder.click(function() {

            window.displayHelper.showPopupDialog(`
                <div>
                    <div class="panel-heading">
                        <h2 class="sectionTitle">
                            <span class="iconTag"><i class="icon fas fa-list-ul"></i></span>
                            Accès — Sélection IOI — 2018
                        </h2>
                        <div class="exit" id="picancel"><i class="icon fas fa-times"></i></div>
                    </div>
                    <div id="sensorPicker" class="panel-body">
                    <div>
                </div>
            `);

            $('#picancel').click(function() {
                $('#popupMessage').hide();
                window.displayHelper.popupMessageShown = false;    
            });

            drawSensorSelector();
        });
    }

    function isPortUsed(port) {
        for (var i = 0; i < infos.quickPiSensors.length; i++) {
            var sensor = infos.quickPiSensors[i];

            if (sensor.port == port)
                return true;
        }

        return false;
    };

    var portTypePorts = {
        "D": [5, 16, 18, 22, 24, 26],
        "A": [0, 2, 4, 6],
        "i2c": ["i2c"]
    };

    function drawSensorSelector() {
        for (var iSensorDef = 0; iSensorDef < sensorDefinitions.length; iSensorDef++) {
            var sensorDefinition = sensorDefinitions[iSensorDef];

            addSensorToSelector(sensorDefinition);
        }
    };

    function addSensorToSelector(sensorDefinition) {
        var iDiv = document.createElement('div');

        var image = new Image();
        image.src = getImg(sensorDefinition.selectorImages[0]);

        var portSelect = document.createElement('select');

        portSelect.id = sensorDefinition.name + "-port";

        var ports = portTypePorts[sensorDefinition.portType]
        for (var iPort = 0; iPort < ports.length; iPort++) {
            if (!isPortUsed(sensorDefinition.portType + ports[iPort])) {
                var option = document.createElement('option');
                option.innerText = ports[iPort];
                portSelect.appendChild(option);
            }
        }

        var button = document.createElement('button');
        button.innerText = "Add"

        button.onclick = function () {
            var port = $("#" + sensorDefinition.name + "-port option:selected").text();
            infos.quickPiSensors.push(
                { type: sensorDefinition.name, port: sensorDefinition.portType + port },
            );

            $('#popupMessage').hide();
            window.displayHelper.popupMessageShown = false;

            context.resetDisplay();
        };

        iDiv.appendChild(image);
        iDiv.appendChild(portSelect);
        iDiv.appendChild(button);

        $('#sensorPicker').append(iDiv);
    };

    // Straight from stack overflow :)
    function squareSize(x, y, n) {
        // Compute number of rows and columns, and cell size
        var ratio = x / y;
        var ncols_float = Math.sqrt(n * ratio);
        var nrows_float = n / ncols_float;

        // Find best option filling the whole height
        var nrows1 = Math.ceil(nrows_float);
        var ncols1 = Math.ceil(n / nrows1);
        while (nrows1 * ratio < ncols1) {
            nrows1++;
            ncols1 = Math.ceil(n / nrows1);
        }
        var cell_size1 = y / nrows1;

        // Find best option filling the whole width
        var ncols2 = Math.ceil(ncols_float);
        var nrows2 = Math.ceil(n / ncols2);
        while (ncols2 < nrows2 * ratio) {
            ncols2++;
            nrows2 = Math.ceil(n / ncols2);
        }
        var cell_size2 = x / ncols2;

        // Find the best values
        var nrows, ncols, cell_size;
        if (cell_size1 < cell_size2) {
            nrows = nrows2;
            ncols = ncols2;
            cell_size = cell_size2;
        } else {
            nrows = nrows1;
            ncols = ncols1;
            cell_size = cell_size1;
        }

        return {
            rows: ncols,
            cols: nrows,
            size: cell_size
        };
    }

    function showasConnected() {
        $('#piconnectprogress').hide();
        $('#piinstallcheck').hide();
        $('#piinstallprogresss').hide();
        $('#piinstallui').show();
        $('#piconnect').css('background-color', '#F9A423');

        $('#piinstall').css('background-color', "#488FE1");

        $('#piconnecttext').hide();
    }

    function showasConnecting() {
        $('#piconnectprogress').show();
        $('#piinstallcheck').hide();
        $('#piinstallprogresss').hide();
    }

    function showasReleased() {
        $('#piconnectprogress').hide();
        $('#piinstallcheck').hide();
        $('#piinstallprogresss').hide();
        $('#piinstallui').hide();
        $('#piconnect').css('background-color', '#F9A423');
        $('#piconnecttext').show();
    }


    function showasDisconnected() {
        $('#piconnectprogress').hide();
        $('#piinstallcheck').hide();
        $('#piinstallprogresss').hide();
        $('#piinstall').css('background-color', 'gray');
        $('#piconnect').css('background-color', 'gray');
        $('#piconnecttext').hide();
    }

    function raspberryPiConnected() {
        showasConnected();

        context.quickPiConnection.startNewSession();

        context.liveUpdateCount = 0;
        context.offLineMode = false;

        sessionStorage.autoConnect = "1";

        context.resetDisplay();
    }

    function raspberryPiDisconnected(wasConnected) {

        if (context.releasing || !wasConnected)
            showasReleased();
        else
            showasDisconnected();

        context.offLineMode = true;

        if (context.quickPiConnection.wasLocked()) {
            window.displayHelper.showPopupMessage(strings.messages.piPlocked, 'blanket');
        } else if (!context.releasing && !wasConnected) {
            window.displayHelper.showPopupMessage(strings.messages.cantConnect, 'blanket');
        }

        if (wasConnected && !context.releasing && !context.quickPiConnection.wasLocked()) {
            context.quickPiConnection.connect(sessionStorage.raspberryPiIpAddress);
        } else {
            // If I was never connected don't attempt to autoconnect again
            sessionStorage.autoConnect = "0";
            context.resetDisplay();
        }

    }


    // Update the context's display to the new scale (after a window resize for instance)
    context.updateScale = function () {
        if (!context.display) {
            return;
        }
        context.resetDisplay();
    };

    // When the context is unloaded, this function is called to clean up
    // anything the context may have created
    context.unload = function () {
        // Do something here
        if (context.sensorPollInterval) {
            clearInterval(context.sensorPollInterval);
        }

        if (context.display) {
            // Do something here
        }
    };

    function findSensor(type, port) {
        for (var i = 0; i < infos.quickPiSensors.length; i++) {
            var sensor = infos.quickPiSensors[i];

            if (sensor.type == type && sensor.port == port)
                return sensor;
        }

        return null;
    }

    function drawTimeLine() {
        if (paper == undefined || !context.display)
            return;

        if (context.timelineText)
            for (var i = 0; i < context.timelineText.length; i++) {
                context.timelineText[i].remove();
            }

        context.timelineText = [];

        for (var i = 0; i <= context.maxTime; i += 1000) {
            var x = context.timelineStartx + (i * context.pixelsPerTime);

            var timelabel = paper.text(x, paper.height - context.sensorSize / 2, (i / 1000));

            timelabel.attr({ "font-size": "20" + "px", 'text-anchor': 'center', 'font-weight': 'bold', fill: "gray" });

            context.timelineText.push(timelabel);
            /*
                        paper.path(["M", x,
                            paper.height - context.sensorSize / 2,
                            "L", x,
                            paper.height - context.sensorSize]);*/
        }
        /*
                paper.path(["M", context.timelineStartx,
                    paper.height - context.sensorSize * 3 / 4,
                    "L", paper.width,
                    paper.height - context.sensorSize * 3 / 4]);
        */
    }

    function drawCurrentTime() {
        if (!paper || !context.display)
            return;

        var startx = context.timelineStartx + (context.currentTime * context.pixelsPerTime);

        if (context.timeLineCurrent)
            context.timeLineCurrent.remove();

        if (context.timeLineCircle)
            context.timeLineCircle.remove();

        if (context.timeLineTriangle)
            context.timeLineTriangle.remove();

        context.timeLineCurrent = paper.path(["M", startx,
            0,
            "L", startx,
            paper.height]);

        context.timeLineCurrent.attr({
            "stroke-width": 5,
            "stroke": "#678AB4",
            "stroke-linecap": "round"
        });

        var circleradius = 10;
        context.timeLineCircle = paper.circle(startx, paper.height - circleradius, 10);

        context.timeLineCircle.attr({
            "fill": "white",
            "stroke": "#678AB4"
        });

        var trianglew = 10;
        context.timeLineTriangle = paper.path(["M", startx, 0,
            "L", startx + trianglew, 0,
            "L", startx, trianglew,
            "L", startx - trianglew, 0,
            "L", startx, 0
        ]);

        context.timeLineTriangle.attr({
            "fill": "#678AB4",
            "stroke": "#678AB4"
        });

    }


    function drawSensorTimeLineState(sensor, state, startTime, endTime, type) {
        if (paper == undefined ||
            !context.display ||
            !context.autoGrading)
            return;

        var stateOffset = 160;

        var startx = context.timelineStartx + (startTime * context.pixelsPerTime);
        var stateLenght = (endTime - startTime) * context.pixelsPerTime;

        var ypositionmiddle = ((sensor.drawInfo.y + (sensor.drawInfo.height * .5)) + (sensor.drawInfo.height * .20));

        var ypositiontop = sensor.drawInfo.y
        var ypositionbottom = sensor.drawInfo.y + sensor.drawInfo.height;

        color = "green";
        if (type == "expected") {
            color = "lightgrey";
            strokewidth = 8;
        } else if (type == "wrong") {
            color = "red";
            strokewidth = 4;
        }
        else if (type == "actual") {
            color = "yellow";
            strokewidth = 4;
        }

        var isAnalog = findSensorDefinition(sensor).isAnalog;
        var percentage = + state;

        if (isAnalog) {
            var offset = (ypositionbottom - ypositiontop) * findSensorDefinition(sensor).getPercentageFromState(state);

            if (type == "wrong") {
                color = "red";
                ypositionmiddle += 4;
            }
            else if (type == "actual") {
                color = "yellow";
                ypositionmiddle += 4;
            }

            if (sensor.lastAnalogState != null
                && sensor.lastAnalogState != state) {
                var oldStatePercentage = findSensorDefinition(sensor).getPercentageFromState(sensor.lastAnalogState);

                var previousOffset = (ypositionbottom - ypositiontop) * oldStatePercentage;

                var joinline = paper.path(["M", startx,
                    ypositiontop + offset,
                    "L", startx,
                    ypositiontop + previousOffset]);

                joinline.attr({
                    "stroke-width": strokewidth,
                    "stroke": color,
                    "stroke-linejoin": "round",
                    "stroke-linecap": "round"
                });

                paper.text(startx + 15, ypositiontop + offset - 10, state);
            }

            sensor.lastAnalogState = state == null ? 0 : state;

            stateline = paper.path(["M", startx,
                ypositiontop + offset,
                "L", startx + stateLenght,
                ypositiontop + offset]);

            stateline.attr({
                "stroke-width": strokewidth,
                "stroke": color,
                "stroke-linejoin": "round",
                "stroke-linecap": "round"
            });
        } else if (sensor.type == "screen") {
            if (state) {
                sensor.stateText = paper.text(startx, ypositionmiddle + 10, '\uf27a');

                sensor.stateText.attr({
                    "font": "Font Awesome 5 Free",
                    "stroke": color,
                    "fill": color,
                    "font-size": (strokewidth * 2) + "px"
                });

                sensor.stateText.node.style.fontFamily = '"Font Awesome 5 Free"';
                sensor.stateText.node.style.fontWeight = "bold";

                function showPopup() {
                    if (!sensor.tooltip) {
                        sensor.tooltipText = paper.text(startx, ypositionmiddle + 50, state.line1 + "\n" + state.line2);

                        var textDimensions = sensor.tooltipText.getBBox();

                        sensor.tooltip = paper.rect(textDimensions.x - 15, textDimensions.y - 15, textDimensions.width + 30, textDimensions.height + 30);
                        sensor.tooltip.attr({
                            "stroke": "black",
                            "stroke-width": 2,
                            "fill": "white",
                        });

                        sensor.tooltipText.toFront();
                    }
                };

                sensor.stateText.click(showPopup);

                sensor.stateText.hover(showPopup, function () {
                    if (sensor.tooltip) {
                        sensor.tooltip.remove();
                        sensor.tooltip = null;
                    }
                    if (sensor.tooltipText) {
                        sensor.tooltipText.remove();
                        sensor.tooltipText = null;
                    }
                });
            }
        } else if (percentage != 0) {
            stateline = paper.path(["M", startx,
                ypositionmiddle,
                "L", startx + stateLenght,
                ypositionmiddle]);

            stateline.attr({
                "stroke-width": strokewidth,
                "stroke": color,
                "stroke-linejoin": "round",
                "stroke-linecap": "round"
            });
        }

        if (type == "wrong") {
            /*
            wrongindicator = paper.path(["M", sensor.drawInfo.x + stateOffset + (sensor.drawInfo.width * stateNumber),
                             sensor.drawInfo.y,
                        "L", sensor.drawInfo.x + stateOffset + 40 + (sensor.drawInfo.width * stateNumber),
                                sensor.drawInfo.y + sensor.drawInfo.height, 

                        "M", sensor.drawInfo.x + stateOffset + (sensor.drawInfo.width * stateNumber),
                                sensor.drawInfo.y + sensor.drawInfo.height,
                        "L", sensor.drawInfo.x + stateOffset + 40 + (sensor.drawInfo.width * stateNumber),
                                   sensor.drawInfo.y
                            ]);

            wrongindicator.attr({
                "stroke-width": 5, "stroke" : "red", "stroke-linecap": "round" });*/
        }

        // Make sure the current time bar is always on top of states
        drawCurrentTime(sensor);
    }

    function getImg(filename) {
        // Get the path to an image stored in bebras-modules
        return (window.modulesPath ? window.modulesPath : '../../modules/') + 'img/quickpi/' + filename;
    }


    function setSlider(sensor, juststate, imgx, imgy, imgw, imgh, min, max) {
        if (juststate) {
            var percentage = findSensorDefinition(sensor).getPercentageFromState(sensor.state);

            thumby = sensor.sliderdata.insiderecty +
                sensor.sliderdata.insideheight -
                sensor.sliderdata.thumbheight -
                (percentage * sensor.sliderdata.scale);

            sensor.thumb.attr('y', thumby);

            return;
        }

        removeSlider(sensor);


        sensor.sliderdata = {};

        var actuallydragged;

        sensor.hasslider = true;
        sensor.focusrect.drag(
            function (dx, dy, x, y, event) {

                var newy = sensor.sliderdata.zero + dy;

                if (newy < sensor.sliderdata.insiderecty)
                    newy = sensor.sliderdata.insiderecty;

                if (newy > sensor.sliderdata.insiderecty + sensor.sliderdata.insideheight - sensor.sliderdata.thumbheight)
                    newy = sensor.sliderdata.insiderecty + sensor.sliderdata.insideheight - sensor.sliderdata.thumbheight;

                sensor.thumb.attr('y', newy);

                var percentage = 1 - ((newy - sensor.sliderdata.insiderecty) / sensor.sliderdata.scale);

                sensor.state = findSensorDefinition(sensor).getStateFromPercentage(percentage);
                drawSensor(sensor, sensor.state, true);

                actuallydragged++;
            },
            function (x, y, event) {

                showSlider();
                actuallydragged = 0;
                sensor.sliderdata.zero = sensor.thumb.attr('y');
            },
            function (event) {
                if (actuallydragged > 4) {
                    hideSlider(sensor);
                }
            }
        );

        function showSlider() {
            hideSlider(sensorWithSlider);
            sensorWithSlider = sensor;

            var outsiderectx = sensor.drawInfo.x;
            var outsiderecty = sensor.drawInfo.y;
            var outsidewidth = sensor.drawInfo.width / 6;
            var outsideheight = sensor.drawInfo.height;

            var insidewidth = outsidewidth / 6;
            sensor.sliderdata.insideheight = sensor.drawInfo.height * 0.60;

            var insiderectx = outsiderectx + (outsidewidth / 2) - (insidewidth / 2);
            sensor.sliderdata.insiderecty = outsiderecty + (outsideheight / 2) - (sensor.sliderdata.insideheight / 2);

            var circleradius = (outsidewidth / 2) - 1;

            var pluscirclex = outsiderectx + (outsidewidth / 2);
            var pluscircley = outsiderecty + circleradius + 1;

            var minuscirclex = pluscirclex;
            var minuscircley = outsiderecty + outsideheight - circleradius - 1;


            paper.setStart();


            sensor.sliderrect = paper.rect(outsiderectx, outsiderecty, outsidewidth, outsideheight, outsidewidth / 2);
            sensor.sliderrect.attr("fill", "#468DDF");
            sensor.sliderrect.attr("stroke", "#468DDF");

            sensor.sliderrect = paper.rect(insiderectx, sensor.sliderdata.insiderecty, insidewidth, sensor.sliderdata.insideheight, 2);
            sensor.sliderrect.attr("fill", "#2E5D94");
            sensor.sliderrect.attr("stroke", "#2E5D94");


            sensor.plusset = paper.set();

            sensor.pluscircle = paper.circle(pluscirclex, pluscircley, circleradius);
            sensor.pluscircle.attr("fill", "#F5A621");
            sensor.pluscircle.attr("stroke", "#F5A621");

            sensor.plus = paper.text(pluscirclex, pluscircley, "+");
            sensor.plus.attr({ fill: "white" });
            sensor.plus.node.style = "-moz-user-select: none; -webkit-user-select: none;";

            sensor.plusset.push(sensor.pluscircle, sensor.plus);

            sensor.plusset.click(function () {
                if (sensor.state < max)
                    sensor.state += 1;

                drawSensor(sensor, sensor.state, true);
            });


            sensor.minusset = paper.set();

            sensor.minuscircle = paper.circle(minuscirclex, minuscircley, circleradius);
            sensor.minuscircle.attr("fill", "#F5A621");
            sensor.minuscircle.attr("stroke", "#F5A621");

            sensor.minus = paper.text(minuscirclex, minuscircley, "-");
            sensor.minus.attr({ fill: "white" });
            sensor.minus.node.style = "-moz-user-select: none; -webkit-user-select: none;";

            sensor.minusset.push(sensor.minuscircle, sensor.minus);

            sensor.minusset.click(function () {
                if (sensor.state > min)
                    sensor.state -= 1;

                drawSensor(sensor, sensor.state, true);
            });


            var thumbwidth = outsidewidth * .80;
            sensor.sliderdata.thumbheight = outsidewidth * 1.4;
            sensor.sliderdata.scale = (sensor.sliderdata.insideheight - sensor.sliderdata.thumbheight);


            var percentage = findSensorDefinition(sensor).getPercentageFromState(sensor.state);


            var thumby = sensor.sliderdata.insiderecty + sensor.sliderdata.insideheight - sensor.sliderdata.thumbheight - (percentage * sensor.sliderdata.scale);

            var thumbx = insiderectx + (insidewidth / 2) - (thumbwidth / 2);

            sensor.thumb = paper.rect(thumbx, thumby, thumbwidth, sensor.sliderdata.thumbheight, outsidewidth / 2);
            sensor.thumb.attr("fill", "#F5A621");
            sensor.thumb.attr("stroke", "#F5A621");

            sensor.slider = paper.setFinish();

            sensor.thumb.drag(
                function (dx, dy, x, y, event) {

                    var newy = sensor.sliderdata.zero + dy;

                    if (newy < sensor.sliderdata.insiderecty)
                        newy = sensor.sliderdata.insiderecty;

                    if (newy > sensor.sliderdata.insiderecty + sensor.sliderdata.insideheight - sensor.sliderdata.thumbheight)
                        newy = sensor.sliderdata.insiderecty + sensor.sliderdata.insideheight - sensor.sliderdata.thumbheight;

                    sensor.thumb.attr('y', newy);

                    var percentage = 1 - ((newy - sensor.sliderdata.insiderecty) / sensor.sliderdata.scale);
                    sensor.state = findSensorDefinition(sensor).getStateFromPercentage(percentage);
                    drawSensor(sensor, sensor.state, true);


                },
                function (x, y, event) {
                    sensor.sliderdata.zero = sensor.thumb.attr('y');

                },
                function (event) {
                }
            );
        }
    }

    function removeSlider(sensor) {
        if (sensor.hasslider && sensor.focusrect) {
            sensor.focusrect.undrag();
            sensor.hasslider = false;
        }
        
        if (sensor.slider) {
            sensor.slider.remove();
            sensor.slider = null;
        }
    }

    function sensorInConnectedModeError() {
        window.displayHelper.showPopupMessage(strings.messages.sensorInOnlineMode, 'blanket');
    }

    function drawSensor(sensor, state = true, juststate = false) {
        if (paper == undefined || !context.display)
            return;

        var imgw = sensor.drawInfo.width / 2;
        var imgh = sensor.drawInfo.height / 2;

        var imgx = sensor.drawInfo.x + imgw / 3;
        var imgy = sensor.drawInfo.y + (sensor.drawInfo.height / 2) - (imgh / 2);

        var state1x = imgx + imgw;
        var state1y = imgy + imgh * 2 / 3;

        var portx = imgx + imgw;
        var porty = imgy + imgh / 3;

        var portsize = sensor.drawInfo.height * 0.10;
        var statesize = sensor.drawInfo.height * 0.10;

        if (!sensor.focusrect || !sensor.focusrect.paper.canvas)
            sensor.focusrect = paper.rect(imgx, imgy, imgw, imgh);

        sensor.focusrect.attr({
            "fill": "468DDF",
            "fill-opacity": 0,
            "opacity": 0,
            "x": imgx,
            "y": imgy,
            "width": imgw,
            "height": imgh,
        });

        if (infos.customSensors) {
            if (!sensor.removerect || !sensor.removerect.paper.canvas)
                sensor.removerect = paper.text(portx, imgy, "\uf00d"); // fa-times char

            sensor.removerect.attr({
                "font-size": "30" + "px",
                fill: "lightgray",
                "font-family": "Font Awesome 5 Free",
                'text-anchor': 'start',
                "x": portx,
                "y": imgy,
            });

            sensor.removerect.node.style = "-moz-user-select: none; -webkit-user-select: none;";
            sensor.removerect.node.style.fontFamily = '"Font Awesome 5 Free"';
            sensor.removerect.node.style.fontWeight = "bold";
            

            sensor.removerect.click(function (element) {
                for (var i = 0; i < infos.quickPiSensors.length; i++) {
                    if (infos.quickPiSensors[i] === sensor) {
                        infos.quickPiSensors.splice(i, 1);
                    }
                }

                context.resetDisplay();
            });
        }



        if (context.autoGrading) {
            imgw = sensor.drawInfo.width * .80;
            imgh = sensor.drawInfo.height * .80;

            imgx = sensor.drawInfo.x + imgw * 0.75;
            imgy = sensor.drawInfo.y + (sensor.drawInfo.height / 2) - (imgh / 2);

            state1x = imgx + imgw * 1.2;
            state1y = imgy + (imgh / 2);

            portx = sensor.drawInfo.x;
            porty = imgy + (imgh / 2);

            portsize = imgh / 3;
            statesize = imgh / 2;
        }


        if (sensor.type == "led") {
            if (sensor.stateText)
                sensor.stateText.remove();

            if (!sensor.ledon || !sensor.ledon.paper.canvas)
                sensor.ledon = paper.image(getImg('ledon.png'), imgx, imgy, imgw, imgh);

            if (!sensor.ledoff || !sensor.ledoff.paper.canvas) {
                sensor.ledoff = paper.image(getImg('ledoff.png'), imgx, imgy, imgw, imgh);

                if (!context.autoGrading) {
                    sensor.focusrect.click(function () {
                        sensor.state = !sensor.state;
                        drawSensor(sensor);
                    })
                }
            }

            sensor.ledon.attr({
                "x": imgx,
                "y": imgy,
                "width": imgw,
                "height": imgh,
            });
            sensor.ledoff.attr({
                "x": imgx,
                "y": imgy,
                "width": imgw,
                "height": imgh,
            });

            if (sensor.state) {
                sensor.ledon.attr({ "opacity": 1 });
                sensor.ledoff.attr({ "opacity": 0 });

                sensor.stateText = paper.text(state1x, state1y, "ON");
            } else {
                sensor.ledon.attr({ "opacity": 0 });
                sensor.ledoff.attr({ "opacity": 1 });

                sensor.stateText = paper.text(state1x, state1y, "OFF");
            }


            if ((!context.runner || !context.runner.isRunning())
                && !context.offLineMode) {
                var command = "changeLedState(" + sensor.port.substring(1) + "," + (sensor.state ? 1 : 0) + ")";
                context.quickPiConnection.sendCommand(command, function (x) { });
            }

        } else if (sensor.type == "button") {
            if (sensor.stateText)
                sensor.stateText.remove();

            if (!sensor.buttonon || !sensor.buttonon.paper.canvas)
                sensor.buttonon = paper.image(getImg('buttonon.png'), imgx, imgy, imgw, imgh);

            if (!sensor.buttonoff || !sensor.buttonoff.paper.canvas)
                sensor.buttonoff = paper.image(getImg('buttonoff.png'), imgx, imgy, imgw, imgh);

            sensor.buttonon.attr({
                "x": imgx,
                "y": imgy,
                "width": imgw,
                "height": imgh,
            });
            sensor.buttonoff.attr({
                "x": imgx,
                "y": imgy,
                "width": imgw,
                "height": imgh,
            });

            if (sensor.state) {
                sensor.buttonon.attr({ "opacity": 1 });
                sensor.buttonoff.attr({ "opacity": 0 });

                sensor.stateText = paper.text(state1x, state1y, "ON");
            } else {
                sensor.buttonon.attr({ "opacity": 0 });
                sensor.buttonoff.attr({ "opacity": 1 });

                sensor.stateText = paper.text(state1x, state1y, "OFF");
            }

            if (!context.autoGrading && !sensor.buttonon.node.onmousedown) {
                sensor.focusrect.node.onmousedown = function () {
                    if (context.offLineMode) {
                        sensor.state = true;
                        drawSensor(sensor);
                    } else
                        sensorInConnectedModeError()
                };


                sensor.focusrect.node.onmouseup = function () {
                    if (context.offLineMode) {
                        sensor.state = false;
                        sensor.wasPressed = true;
                        drawSensor(sensor);

                        if (sensor.onPressed)
                            sensor.onPressed();
                    } else
                        sensorInConnectedModeError()
                }

                sensor.focusrect.node.ontouchstart = sensor.focusrect.node.onmousedown;
                sensor.focusrect.node.ontouchend = sensor.focusrect.node.onmouseup;
            }
        } else if (sensor.type == "screen") {
            if (sensor.stateText)
                sensor.stateText.remove();

            if (sensor.stateText2)
                sensor.stateText2.remove();

            imgw = sensor.drawInfo.width / 1.3;
            imgh = sensor.drawInfo.height / 1.2;

            imgx = sensor.drawInfo.x + (sensor.drawInfo.width * .05);
            imgy = sensor.drawInfo.y + (sensor.drawInfo.height / 2) - (imgh / 2);

            portx = imgx + imgw * 1.1;
            porty = imgy + imgh / 3;

            if (context.autoGrading) {
                imgw = sensor.drawInfo.width;
                imgh = sensor.drawInfo.height * .70;

                imgx = sensor.drawInfo.x + imgw / 2;
                imgy = sensor.drawInfo.y + (sensor.drawInfo.height / 2) - (imgh / 2);

                state1x = imgx + imgw;
                state1y = imgy + (imgh / 2);

                portx = sensor.drawInfo.x;
                porty = imgy + (imgh / 2);

                portsize = imgh / 4;
            }

            if (!sensor.img || !sensor.img.paper.canvas)
                sensor.img = paper.image(getImg('screen.png'), imgx, imgy, imgw, imgh);

            sensor.img.attr({
                "x": imgx,
                "y": imgy,
                "width": imgw,
                "height": imgh,
            });

            if (sensor.state) {
                var statex = imgx + (imgw * .13);

                var statey = imgy + (imgh * .4);
                var state2y = statey + (imgh * .2);

                if (sensor.state.line1.length > 16)
                    sensor.state.line1 = sensor.state.line1.substring(0, 16);

                if (sensor.state.line2.length > 16)
                    sensor.state.line2 = sensor.state.line2.substring(0, 16);

                sensor.stateText = paper.text(statex, statey, sensor.state.line1);
                sensor.stateText2 = paper.text(statex, state2y, sensor.state.line2);

                sensor.stateText.attr("")

            }
        } else if (sensor.type == "temperature") {
            if (sensor.stateText)
                sensor.stateText.remove();

            if (sensor.state == null)
                sensor.state = 25; // FIXME

            if (!sensor.img || !sensor.img.paper.canvas)
                sensor.img = paper.image(getImg('temperature-cold.png'), imgx, imgy, imgw, imgh);

            if (!sensor.img2 || !sensor.img2.paper.canvas)
                sensor.img2 = paper.image(getImg('temperature-hot.png'), imgx, imgy, imgw, imgh);

            if (!sensor.img3 || !sensor.img3.paper.canvas)
                sensor.img3 = paper.image(getImg('temperature-overlay.png'), imgx, imgy, imgw, imgh);

            sensor.img.attr({
                "x": imgx,
                "y": imgy,
                "width": imgw,
                "height": imgh,
            });
            sensor.img2.attr({
                "x": imgx,
                "y": imgy,
                "width": imgw,
                "height": imgh,
            });

            sensor.img3.attr({
                "x": imgx,
                "y": imgy,
                "width": imgw,
                "height": imgh,
            });

            var scale = imgh / 60;

            var cliph = scale * sensor.state;

            sensor.img2.attr({
                "clip-rect":
                    imgx + "," +
                    (imgy + imgh - cliph) + "," +
                    (imgw) + "," +
                    cliph
            });

            sensor.stateText = paper.text(state1x, state1y, sensor.state + "C");

            if (!context.autoGrading && context.offLineMode) {
                setSlider(sensor, juststate, imgx, imgy, imgw, imgh, 0, 60);
            }
            else {
                sensor.focusrect.click(function () {
                    sensorInConnectedModeError();
                });

                removeSlider(sensor);
            }

        } else if (sensor.type == "servo") {
            if (sensor.stateText)
                sensor.stateText.remove();

            if (!sensor.img || !sensor.img.paper.canvas)
                sensor.img = paper.image(getImg('servo.png'), imgx, imgy, imgw, imgh);

            if (!sensor.pale || !sensor.pale.paper.canvas)
                sensor.pale = paper.image(getImg('servo-pale.png'), imgx, imgy, imgw, imgh);


            if (!sensor.center || !sensor.center.paper.canvas)
                sensor.center = paper.image(getImg('servo-center.png'), imgx, imgy, imgw, imgh);

            sensor.img.attr({
                "x": imgx,
                "y": imgy,
                "width": imgw,
                "height": imgh,
            });
            sensor.pale.attr({
                "x": imgx,
                "y": imgy,
                "width": imgw,
                "height": imgh,
                "transform": ""
            });
            sensor.center.attr({
                "x": imgx,
                "y": imgy,
                "width": imgw,
                "height": imgh,
            });

            sensor.pale.rotate(sensor.state);

            if (sensor.state == null)
                sensor.state = 0;

            sensor.stateText = paper.text(state1x, state1y, sensor.state + "°");

            if ((!context.runner || !context.runner.isRunning())
                && !context.offLineMode) {
                if (!sensor.updatetimeout) {
                    sensor.updatetimeout = setTimeout(function () {
                        var command = "setServoAngle(" + sensor.port.substring(1) + "," + sensor.state + ")";
                        context.quickPiConnection.sendCommand(command, function (x) { });

                        sensor.updatetimeout = null;
                    }, 100);
                }
            }

            if (!context.autoGrading &&
                (!context.runner || !context.runner.isRunning())) {
                setSlider(sensor, juststate, imgx, imgy, imgw, imgh, 0, 180);
            } else {
                removeSlider(sensor);
            }
        }
        else if (sensor.type == "potentiometer") {
            if (sensor.stateText)
                sensor.stateText.remove();

            if (!sensor.img || !sensor.img.paper.canvas)
                sensor.img = paper.image(getImg('potentiometer.png'), imgx, imgy, imgw, imgh);

            if (!sensor.pale || !sensor.pale.paper.canvas)
                sensor.pale = paper.image(getImg('potentiometer-pale.png'), imgx, imgy, imgw, imgh);

            sensor.img.attr({
                "x": imgx,
                "y": imgy,
                "width": imgw,
                "height": imgh,
            });

            sensor.pale.attr({
                "x": imgx,
                "y": imgy,
                "width": imgw,
                "height": imgh,
                "transform": ""
            });

            if (sensor.state == null)
                sensor.state = 0;

            sensor.pale.rotate(sensor.state * 3.6);

            sensor.stateText = paper.text(state1x, state1y, sensor.state + "%");

            if (!context.autoGrading && context.offLineMode) {
                setSlider(sensor, juststate, imgx, imgy, imgw, imgh, 0, 100);
            } else {
                sensor.focusrect.click(function () {
                    sensorInConnectedModeError();
                });

                removeSlider(sensor);
            }

        } else if (sensor.type == "range") {
            if (sensor.stateText)
                sensor.stateText.remove();

            if (!sensor.img || !sensor.img.paper.canvas)
                sensor.img = paper.image(getImg('range.png'), imgx, imgy, imgw, imgh);

            sensor.img.attr({
                "x": imgx,
                "y": imgy,
                "width": imgw,
                "height": imgh,
            });

            if (sensor.state == null)
                sensor.state = 0;

            if (sensor.rangedistance)
                sensor.rangedistance.remove();

            if (sensor.rangedistancestart)
                sensor.rangedistancestart.remove();

            if (sensor.rangedistanceend)
                sensor.rangedistanceend.remove();

            var rangew;

            if (sensor.state < 30) {
                rangew = imgw * sensor.state / 100;
            } else {
                var firstpart = imgw * 30 / 100;
                var remaining = imgw - firstpart;

                rangew = firstpart + (remaining * (sensor.state) * 0.002);
            }

            var centerx = imgx + (imgw / 2);

            sensor.rangedistance = paper.path(["M", centerx - (rangew / 2),
                imgy + imgw,
                "L", centerx + (rangew / 2),
                imgy + imgw]);

            var markh = 16;

            sensor.rangedistancestart = paper.path(["M", centerx - (rangew / 2),
                imgy + imgw - (markh / 2),
                "L", centerx - (rangew / 2),
                imgy + imgw + (markh / 2)]);

            sensor.rangedistanceend = paper.path(["M", centerx + (rangew / 2),
                imgy + imgw - (markh / 2),
                "L", centerx + (rangew / 2),
                imgy + imgw + (markh / 2)]);

            sensor.rangedistance.attr({
                "stroke-width": 4,
                "stroke": "#468DDF",
                "stroke-linecapstring": "round"
            });

            sensor.rangedistancestart.attr({
                "stroke-width": 4,
                "stroke": "#468DDF",
                "stroke-linecapstring": "round"
            });


            sensor.rangedistanceend.attr({
                "stroke-width": 4,
                "stroke": "#468DDF",
                "stroke-linecapstring": "round"
            });

            if (sensor.state >= 10)
                sensor.state = Math.round(sensor.state);

            sensor.stateText = paper.text(state1x, state1y, sensor.state + "cm");
            if (!context.autoGrading && context.offLineMode) {
                setSlider(sensor, juststate, imgx, imgy, imgw, imgh, 0, 500);
            } else {
                sensor.focusrect.click(function () {
                    sensorInConnectedModeError();
                });

                removeSlider(sensor);
            }
        } else if (sensor.type == "light") {
            if (sensor.stateText)
                sensor.stateText.remove();

            if (!sensor.img || !sensor.img.paper.canvas)
                sensor.img = paper.image(getImg('light.png'), imgx, imgy, imgw, imgh);

            if (!sensor.moon || !sensor.moon.paper.canvas)
                sensor.moon = paper.image(getImg('light-moon.png'), imgx, imgy, imgw, imgh);

            if (!sensor.sun || !sensor.sun.paper.canvas)
                sensor.sun = paper.image(getImg('light-sun.png'), imgx, imgy, imgw, imgh);

            sensor.img.attr({
                "x": imgx,
                "y": imgy,
                "width": imgw,
                "height": imgh,
            });

            if (sensor.state == null)
                sensor.state = 0;

            if (sensor.state > 50) {
                var opacity = (sensor.state - 50) * 0.02;
                sensor.sun.attr({
                    "x": imgx,
                    "y": imgy,
                    "width": imgw,
                    "height": imgh,
                    "opacity": opacity * .80
                });
                sensor.moon.attr({ "opacity": 0 });
            }
            else {
                var opacity = (50 - sensor.state) * 0.02;
                sensor.moon.attr({
                    "x": imgx,
                    "y": imgy,
                    "width": imgw,
                    "height": imgh,
                    "opacity": opacity * .80
                });
                sensor.sun.attr({ "opacity": 0 });
            }

            sensor.stateText = paper.text(state1x, state1y, sensor.state + "%");
            if (!context.autoGrading && context.offLineMode) {
                setSlider(sensor, juststate, imgx, imgy, imgw, imgh, 0, 100);
            } else {
                sensor.focusrect.click(function () {
                    sensorInConnectedModeError();
                });

                removeSlider(sensor);
            }
        } else if (sensor.type == "humidity") {
            if (sensor.stateText)
                sensor.stateText.remove();

            if (!sensor.img || !sensor.img.paper.canvas)
                sensor.img = paper.image(getImg('humidity.png'), imgx, imgy, imgw, imgh);

            sensor.img.attr({
                "x": imgx,
                "y": imgy,
                "width": imgw,
                "height": imgh,
            });

            if (sensor.state == null)
                sensor.state = 0;

            sensor.stateText = paper.text(state1x, state1y, sensor.state + "%");
            if (!context.autoGrading && context.offLineMode) {
                setSlider(sensor, juststate, imgx, imgy, imgw, imgh, 0, 100);
            } else {
                sensor.focusrect.click(function () {
                    sensorInConnectedModeError();
                });

                removeSlider(sensor);
            }
        }

        if (sensor.portText)
            sensor.portText.remove();


        if (sensor.hasOwnProperty("stateText"))
            sensor.stateText.attr({ "font-size": statesize + "px", 'text-anchor': 'start', 'font-weight': 'bold', fill: "gray" });

        if (sensor.hasOwnProperty("stateText2"))
            sensor.stateText2.attr({ "font-size": statesize + "px", 'text-anchor': 'start', 'font-weight': 'bold', fill: "gray" });


        sensor.portText = paper.text(portx, porty, sensor.port);
        sensor.portText.attr({ "font-size": portsize + "px", 'text-anchor': 'start', fill: "lightgray" });

        // This needs to be in front of everything
        sensor.focusrect.toFront();
    }


    context.registerQuickPiEvent = function (sensorType, port, newState, setInSensor = true) {
        var sensor = findSensor(sensorType, port);
        if (!sensor) {
            context.success = false;
            throw (strings.messages.sensorNotFound);
        }

        if (setInSensor) {
            sensor.state = newState;
            drawSensor(sensor);
        }

        if (context.autoGrading && context.gradingStatesBySensor != undefined) {
            var fail = false;
            var type = "actual";
            var expectedState = context.getSensorExpectedState(sensorType, port);

            if (expectedState != null)
                expectedState.hit = true;

            if (sensor.lastStateChange == null) {
                sensor.lastStateChange = 0;
                sensor.lastState = 0;
            }

            drawSensorTimeLineState(sensor, sensor.lastState, sensor.lastStateChange, context.currentTime, type);

            if (context.currentTime >= context.maxTime) {
                context.success = true;
                context.doNotStartGrade = false;
                throw (strings.messages.testSuccess);
            }
            else if (expectedState != null &&
                !findSensorDefinition(sensor).compareState(expectedState.state, newState)) {
                type = "wrong";
                fail = true;
            }

            sensor.lastStateChange = context.currentTime;
            sensor.lastState = newState;

            if (fail) {
                context.success = false;
                context.doNotStartGrade = false;
                throw (strings.messages.wrongState);
            }
            else
                context.increaseTime(sensor);
        }
    }


    context.increaseTime = function (sensor) {

        if (!sensor.lastTimeIncrease) {
            sensor.lastTimeIncrease = 0;
        }

        if (sensor.callsInTimeSlot == undefined)
            sensor.callsInTimeSlot = 0;

        if (sensor.lastTimeIncrease == context.currentTime) {
            sensor.callsInTimeSlot += 1;
        }
        else {
            sensor.lastTimeIncrease = context.currentTime;
            sensor.callsInTimeSlot = 1;
        }

        if (sensor.callsInTimeSlot > 3) {
            context.currentTime += context.tickIncrease;

            sensor.lastTimeIncrease = context.currentTime;
            sensor.callsInTimeSlot = 0;
        }

        drawCurrentTime();
    }

    context.getSensorExpectedState = function (type, port) {
        var state = null;
        var key = type.toUpperCase() + port.toUpperCase();
        sensorStates = context.gradingStatesBySensor[key];

        if (!sensorStates)
            return; // Fail??

        var lastState;
        var startTime = -1;
        for (var i = 0; i < sensorStates.length; i++) {
            if (startTime >= 0) {
                if (context.currentTime >= startTime &&
                    context.currentTime < sensorStates[i].time) {
                    state = lastState;
                    break;
                }
            }

            startTime = sensorStates[i].time;
            lastState = sensorStates[i];
        }

        // This is the end state
        if (state == null && context.currentTime >= startTime) {
            state = lastState;
        }

        return state;
    }


    context.getSensorState = function (sensorType, port) {
        var state = null;

        if (!context.display || context.autoGrading) {
            var stateTime = context.getSensorExpectedState(sensorType, port);

            if (stateTime != null) {
                stateTime.hit = true;
                state = stateTime.state;
            }
            else {
                state = 0;
            }
        }

        var sensor = findSensor(sensorType, port);
        if (!sensor) {
            context.success = false;
            throw (strings.messages.sensorNotFound);
        }

        if (state == null) {
            state = sensor.state;
        }
        else {
            sensor.state = state;
            drawSensor(sensor);
        }

        if (sensor.lastStateChange == null) {
            sensor.lastStateChange = 0;
            sensor.lastState = 0;
        }

        drawSensorTimeLineState(sensor, sensor.lastState, sensor.lastStateChange, context.currentTime, "actual");
        sensor.lastStateChange = context.currentTime;
        sensor.lastState = state;

        return state;
    }

    // This will advance grading time to the next button release for waitForButton
    // will return false if the next event wasn't a button press
    context.advanceToNextRelease = function (sensorType, port) {
        var retval = false;
        var iStates = 0;

        // Advance until current time, ignore everything in the past.
        while (context.gradingStatesByTime[iStates].time <= context.currentTime)
            iStates++;

        for (; iStates < context.gradingStatesByTime.length; iStates++) {
            sensorState = context.gradingStatesByTime[iStates];

            if (sensorState.type == sensorType &&
                sensorState.port == port) {

                sensorState.hit = true;
                if (!sensorState.state) {
                    context.currentTime = sensorState.time;
                    retval = true;
                    break;
                }
            }
            else {
                retval = false;
                break;
            }
        }

        return retval;
    };




    /***** Functions *****/
    /* Here we define each function of the library.
       Blocks will generally use context.group.blockName as their handler
       function, hence we generally use this name for the functions. */
    context.quickpi.turnLedOn = function (callback) {

        context.registerQuickPiEvent("led", "D5", true);

        if (!context.display || context.autoGrading || context.offLineMode) {
            context.waitDelay(callback);
        }
        else {
            var cb = context.runner.waitCallback(callback);

            context.quickPiConnection.sendCommand("turnLedOn()", cb);
        }
    };

    context.quickpi.turnLedOff = function (callback) {
        context.registerQuickPiEvent("led", "D5", false);

        if (!context.display || context.autoGrading || context.offLineMode) {
            context.waitDelay(callback);
        } else {
            var cb = context.runner.waitCallback(callback);

            context.quickPiConnection.sendCommand("turnLedOff()", cb);
        }
    };

    context.quickpi.waitForButton = function (callback) {
        //        context.registerQuickPiEvent("button", "D22", "wait", false);

        if (!context.display || context.autoGrading) {

            context.advanceToNextRelease("button", "D22");

            context.waitDelay(callback);
        } else if (context.offLineMode) {
            button = findSensor("button", "D22");
            if (button) {
                var cb = context.runner.waitCallback(callback);
                button.onPressed = function () {
                    cb();
                }
            } else {
                context.waitDelay(callback);
            }
        }
        else {
            var cb = context.runner.waitCallback(callback);

            context.quickPiConnection.sendCommand("waitForButton(22)", cb);
        }
    };

    context.quickpi.buttonState = function (callback) {

        if (!context.display || context.autoGrading || context.offLineMode) {
            var state = context.getSensorState("button", "D22");

            context.runner.noDelay(callback, state);
        } else {
            var cb = context.runner.waitCallback(callback);

            context.quickPiConnection.sendCommand("buttonState()", function (returnVal) {

                button = findSensor("button", "D22");
                if (button) {
                    button.state = returnVal != "0";
                    drawSensor(button);
                }

                cb(returnVal != "0");
            });
        }
    };

    context.quickpi.buttonStateInPort = function (port, callback) {

        if (!context.display || context.autoGrading || context.offLineMode) {
            var state = context.getSensorState("button", "D" + port);

            context.runner.noDelay(callback, state);
        } else {
            var cb = context.runner.waitCallback(callback);

            context.quickPiConnection.sendCommand("buttonStateInPort(" + port + ")", function (returnVal) {
                button = findSensor("button", "D" + port);
                if (button) {
                    button.state = returnVal != "0";
                    drawSensor(button);
                }

                cb(returnVal != "0");
            });
        }

    };

    context.quickpi.toggleLedState = function (port, callback) {

        if (!context.display || context.autoGrading || context.offLineMode) {
            var state = context.getSensorState("button", "D" + port);

            context.runner.noDelay(callback, state);
        } else {
            var cb = context.runner.waitCallback(callback);

            context.quickPiConnection.sendCommand("buttonState(" + port + ")", function (returnVal) {
                cb(returnVal != "0");
            });
        }

    };


    context.quickpi.buttonWasPressed = function (port, callback) {

        if (!context.display || context.autoGrading || context.offLineMode) {
            var state = context.getSensorState("button", "D" + port);

            context.runner.noDelay(callback, state);
        } else {
            var cb = context.runner.waitCallback(callback);
            context.quickPiConnection.sendCommand("buttonWasPressed(" + port + ")", function (returnVal) {
                cb(returnVal != "0");
            });
        }

    };

    context.quickpi.changeLedState = function (port, state, callback) {
        var command = "changeLedState(" + port + "," + state + ")";

        context.registerQuickPiEvent("led", "D" + port, state == true);

        if (!context.display || context.autoGrading || context.offLineMode) {
            context.waitDelay(callback);
        } else {
            var cb = context.runner.waitCallback(callback);

            context.quickPiConnection.sendCommand(command, cb);
        }
    };

    context.quickpi.toggleLedState = function (port, callback) {
        var command = "toggleLedState(" + port + ")";
        var state = context.getSensorState("led", "D" + port);

        context.registerQuickPiEvent("led", "D" + port, !state);

        if (!context.display || context.autoGrading || context.offLineMode) {
            context.waitDelay(callback);
        } else {
            var cb = context.runner.waitCallback(callback);

            context.quickPiConnection.sendCommand(command, cb);
        }
    };



    context.quickpi.displayText = function (line1, line2, callback) {
        var command = "displayText(\"" + line1 + "\", \"" + line2 + "\")";

        context.registerQuickPiEvent("screen", "i2c",
            {
                line1: line1,
                line2: line2
            }
        );

        if (!context.display || context.autoGrading || context.offLineMode) {
            context.waitDelay(callback);
        } else {
            var cb = context.runner.waitCallback(callback);

            context.quickPiConnection.sendCommand(command, function () {
                cb();
            });
        }
    };

    context.quickpi.readTemperature = function (port, callback) {
        if (!context.display || context.autoGrading || context.offLineMode) {
            var state = context.getSensorState("temperature", "A" + port);

            context.runner.noDelay(callback, state);
        } else {
            var cb = context.runner.waitCallback(callback);

            context.quickPiConnection.sendCommand("readTemperature(" + port + ")", function (returnVal) {
                var sensor = findSensor("temperature", "A" + port);
                if (sensor) {
                    sensor.state = returnVal;
                }

                cb(returnVal);
            });
        }
    };

    context.quickpi.sleep = function (time, callback) {

        if (!context.display || context.autoGrading) {
            context.currentTime += time;
            context.runner.noDelay(callback);
        }
        else {
            context.runner.waitDelay(callback, null, time);
        }
    };


    context.quickpi.setServoAngle = function (port, angle, callback) {
        if (angle > 180)
            angle = 180;
        else if (angle < 0)
            angle = 0;

        context.registerQuickPiEvent("servo", "D" + port, angle);
        if (!context.display || context.autoGrading || context.offLineMode) {
            context.waitDelay(callback);
        } else {
            var command = "setServoAngle(" + port + "," + angle + ")";
            cb = context.runner.waitCallback(callback);
            context.quickPiConnection.sendCommand(command, cb);
        }
    };


    context.quickpi.readRotaryAngle = function (port, callback) {
        var command = "readRotaryAngle(" + port + ")";

        if (!context.display || context.autoGrading || context.offLineMode) {

            var state = context.getSensorState("potentiometer", "A" + port);
            context.waitDelay(callback, state);
        } else {

            var cb = context.runner.waitCallback(callback);

            context.quickPiConnection.sendCommand(command, function (returnVal) {
                var sensor = findSensor("potentiometer", "A" + port);
                if (sensor) {
                    sensor.state = returnVal;
                }

                cb(returnVal);
            });
        }
    };


    context.quickpi.readDistance = function (port, callback) {
        var command = "readDistance(" + port + ")";

        if (!context.display || context.autoGrading || context.offLineMode) {

            var state = context.getSensorState("range", "D" + port);
            context.waitDelay(callback, state);
        } else {

            var cb = context.runner.waitCallback(callback);

            context.quickPiConnection.sendCommand(command, function (returnVal) {
                var sensor = findSensor("range", "D" + port);
                if (sensor) {
                    sensor.state = returnVal;
                }

                cb(returnVal);
            });
        }
    };



    context.quickpi.readLightIntensity = function (port, callback) {
        var command = "readLightIntensity(" + port + ")";

        if (!context.display || context.autoGrading || context.offLineMode) {

            var state = context.getSensorState("light", "A" + port);
            context.waitDelay(callback, state);
        } else {

            var cb = context.runner.waitCallback(callback);

            context.quickPiConnection.sendCommand(command, function (returnVal) {
                var sensor = findSensor("light", "A" + port);
                if (sensor) {
                    sensor.state = returnVal;
                }

                cb(returnVal);
            });
        }
    };

    context.quickpi.readHumidity = function (port, callback) {
        var command = "readHumidity(" + port + ")";

        if (!context.display || context.autoGrading || context.offLineMode) {

            var state = context.getSensorState("humidity", "D" + port);
            context.waitDelay(callback, state);
        } else {

            var cb = context.runner.waitCallback(callback);

            context.quickPiConnection.sendCommand(command, function (returnVal) {
                var sensor = findSensor("humidity", "D" + port);
                if (sensor) {
                    sensor.state = returnVal;
                }

                cb(returnVal);
            });
        }
    };

    context.quickpi.currentTime = function(callback) {
        var millis = new Date().getTime();

        if (context.autoGrading) {
            millis = context.currentTime;
        }
        
        context.runner.waitDelay(callback, millis);

    };


    /***** Blocks definitions *****/
    /* Here we define all blocks/functions of the library.
       Structure is as follows:
       {
          group: [{
             name: "someName",
             // category: "categoryName",
             // yieldsValue: optional true: Makes a block with return value rather than simple command
             // params: optional array of parameter types. The value 'null' denotes /any/ type. For specific types, see the Blockly documentation ([1,2])
             // handler: optional handler function. Otherwise the function context.group.blockName will be used
             // blocklyJson: optional Blockly JSON objects
             // blocklyInit: optional function for Blockly.Blocks[name].init
             //   if not defined, it will be defined to call 'this.jsonInit(blocklyJson);
             // blocklyXml: optional Blockly xml string
             // codeGenerators: optional object:
             //   { Python: function that generates Python code
             //     JavaScript: function that generates JS code
             //   }
          }]
       }
       [1] https://developers.google.com/blockly/guides/create-custom-blocks/define-blocks
       [2] https://developers.google.com/blockly/guides/create-custom-blocks/type-checks
    */

    context.customBlocks = {
        // Define our blocks for our namespace "template"
        quickpi: {
            // Categories are reflected in the Blockly menu
            sensors: [
                { name: "buttonState", yieldsValue: true },
                { name: "currentTime", yieldsValue: true },

                { name: "waitForButton" },
                {
                    name: "buttonStateInPort", yieldsValue: true, params: ["Number"], blocklyJson: {
                        "args0": [
                            {
                                "type": "field_dropdown", "name": "PARAM_0", "options": [
                                    ["D5", "5"], ["D16", "16"], ["D18", "18"], ["D22", "22"], ["D24", "24"], ["D26", "26"]]
                            }
                        ]
                    }
                },
                {
                    name: "buttonWasPressed", yieldsValue: true, params: ["Number"], blocklyJson: {
                        "args0": [
                            {
                                "type": "field_dropdown", "name": "PARAM_0", "options": [
                                    ["D5", "5"], ["D16", "16"], ["D18", "18"], ["D22", "22"], ["D24", "24"], ["D26", "26"]]
                            }
                        ]
                    }
                },
                {
                    name: "readTemperature", yieldsValue: true, params: ["Number"], blocklyJson: {
                        "args0": [
                            {
                                "type": "field_dropdown", "name": "PARAM_0", "options": [
                                    ["A0", "0"], ["A2", "2"], ["A4", "4"], ["A6", "6"]]
                            }
                        ]
                    }
                },
                {
                    name: "readRotaryAngle", yieldsValue: true, params: ["Number"], blocklyJson: {
                        "args0": [
                            {
                                "type": "field_dropdown", "name": "PARAM_0", "options": [
                                    ["A0", "0"], ["A2", "2"], ["A4", "4"], ["A6", "6"]]
                            }
                        ]
                    }
                },
                {
                    name: "readDistance", yieldsValue: true, params: ["Number"], blocklyJson: {
                        "args0": [
                            {
                                "type": "field_dropdown", "name": "PARAM_0", "options": [
                                    ["D5", "5"], ["D16", "16"], ["D18", "18"], ["D22", "22"], ["D24", "24"], ["D26", "26"]]
                            }
                        ]
                    }
                },
                {
                    name: "readLightIntensity", yieldsValue: true, params: ["Number"], blocklyJson: {
                        "args0": [
                            {
                                "type": "field_dropdown", "name": "PARAM_0", "options": [
                                    ["A0", "0"], ["A2", "2"], ["A4", "4"], ["A6", "6"]]
                            }
                        ]
                    }
                },
                {
                    name: "readHumidity", yieldsValue: true, params: ["Number"], blocklyJson: {
                        "args0": [
                            {
                                "type": "field_dropdown", "name": "PARAM_0", "options": [
                                    ["D5", "5"], ["D16", "16"], ["D18", "18"], ["D22", "22"], ["D24", "24"], ["D26", "26"]]
                            }
                        ]
                    }
                },

            ],
            actions: [
                { name: "turnLedOn" },
                { name: "turnLedOff" },
                {
                    name: "changeLedState", params: ["Number", "Number"], blocklyJson: {
                        "args0": [
                            {
                                "type": "field_dropdown", "name": "PARAM_0", "options": [
                                    ["D5", "5"], ["D16", "16"], ["D18", "18"], ["D22", "22"], ["D24", "24"], ["D26", "26"]]
                            },
                            { "type": "field_dropdown", "name": "PARAM_1", "options": [["ON", "1"], ["OFF", "0"]] },
                        ]
                    }
                },
                {
                    name: "toggleLedState", params: ["Number"], blocklyJson: {
                        "args0": [
                            {
                                "type": "field_dropdown", "name": "PARAM_0", "options": [
                                    ["D5", "5"], ["D16", "16"], ["D18", "18"], ["D22", "22"], ["D24", "24"], ["D26", "26"]]
                            },
                        ]
                    }
                },

                {
                    name: "setServoAngle", params: ["Number", "Number"], blocklyJson: {
                        "args0": [
                            {
                                "type": "field_dropdown", "name": "PARAM_0", "options": [
                                    ["D5", "5"], ["D16", "16"], ["D18", "18"], ["D22", "22"], ["D24", "24"], ["D26", "26"]]
                            },
                            { "type": "input_value", "name": "PARAM_1" },

                        ]
                    },
                    blocklyXml: "<block type='setServoAngle'>" +
                        "<value name='PARAM_1'><shadow type='math_number'></shadow></value>" +
                        "</block>"
                },
                {
                    name: "displayText", params: ["String", "String"], blocklyJson: {
                        "args0": [
                            { "type": "input_value", "name": "PARAM_0", "text": "" },
                            { "type": "input_value", "name": "PARAM_1", "text": "" },
                        ]
                    },
                    blocklyXml: "<block type='displayText'>" +
                        "<value name='PARAM_0'><shadow type='text'><field name='TEXT'>Bonjour</field> </shadow></value>" +
                        "<value name='PARAM_1'><shadow type='text'><field name='TEXT'></field> </shadow></value>" +
                        "</block>"

                },
                {
                    name: "sleep", params: ["Number"], blocklyJson: {
                        "args0": [
                            { "type": "input_value", "name": "PARAM_0", "value": 1 },
                        ]
                    }
                    ,
                    blocklyXml: "<block type='sleep'>" +
                        "<value name='PARAM_0'><shadow type='math_number'></shadow></value>" +
                        "</block>"
                },
                
            ]
        }
        // We can add multiple namespaces by adding other keys to customBlocks.
    };

    // Color indexes of block categories (as a hue in the range 0–420)
    context.provideBlocklyColours = function () {
        return {
            categories: {
                actions: 0,
                sensors: 100
            }
        };
    };

    // Constants available in Python
    context.customConstants = {
        quickpi: [
        ]
    };

    // Don't forget to return our newly created context!
    return context;
}

// Register the library; change "template" by the name of your library in lowercase
if (window.quickAlgoLibraries) {
    quickAlgoLibraries.register('quickpi', getContext);
} else {
    if (!window.quickAlgoLibrariesList) { window.quickAlgoLibrariesList = []; }
    window.quickAlgoLibrariesList.push(['quickpi', getContext]);
}

var sensorWithSlider = null;

window.addEventListener('click', function (e) {
    var keep = false;
    e = e || window.event;
    var target = e.target || e.srcElement;

    if (!sensorWithSlider)
        return;

    if (sensorWithSlider && sensorWithSlider.focusrect && target == sensorWithSlider.focusrect.node)
        keep = true;

    if (sensorWithSlider && sensorWithSlider.slider) {
        sensorWithSlider.slider.forEach(function (element) {
            if (target == element.node ||
                target.parentNode == element.node) {
                keep = true;
                return false;
            }
        });

    }

    if (!keep) {
        hideSlider(sensorWithSlider);
    }

}, false);//<-- we'll get to the false in a minute


function hideSlider(sensor) {
    if (!sensor)
        return;

    if (sensor.slider)
        sensor.slider.remove();

    if (sensor.focusrect && sensor.focusrect.paper && sensor.focusrect.paper.canvas)
        sensor.focusrect.toFront();
};
