var getContext = function(display, infos) {
   var localLanguageStrings = {
      fr: {
         categories: {
            environment: "Environnement",
            shape: "Formes",
            transform: "Transformations",
            effect: "Effets",
            image: "Images",
            rendering: "Rendu",
            typography: "Typographie"
         },
         label: {
            // environment
            popStyle: "dépiler le style",
            pushStyle: "empiler le style",
            cursor: "utiliser le pointeur de souris",
            focused: "le canevas est sélectionné",
            frameCount: "numéro d'itération",
            frameRate: "définir le taux de rafraichissement à",
            __frameRate: "taux de rafraichissement",
            width: "largeur",
            height: "hauteur",
            resize: "redimensionner à la taille",
            // shape
            arc: "dessiner un arc à %1 %2 de taille %3 %4 entre les angles %5 %6",
            ellipse: "dessiner une ellipse à %1 %2 de taille %3 %4",
            line: "dessiner une ligne de %1 %2 à %3 %4",
            point: "dessiner un point à %1 %2",
            quad: "dessiner un quadrilatère aux points %1 %2, %3 %4, %5 %6, %7 %8",
            rect: "dessiner un rectangle à %1 %2 de taille %3 %4",
            triangle: "dessiner un triangle aux points %1 %2, %3 %4, %5 %6",
            bezier: "dessiner une courbe de Bézier allant de %1 %2 avec l'ancre %3 %4 et l'ancre %5 %6 jusqu'à %7 %8",
            bezierDetail: "définir la résolution des courbes de Bézier à",
            bezierPoint: "coordonnée sur la courbe de Bézier allant de %1 avec les ancres %2 et %3 jusqu'au point %4 à l'emplacement %5",
            bezierTangent: "tangente sur la courbe de Bézier allant de %1 avec les ancres %2 et %3 jusqu'au point %4 à l'emplacement %5",
            curve: "dessiner une courbe spline allant de %1 %2 avec l'ancre %3 %4 et l'ancre %5 %6 jusqu'à %7 %8",
            curveDetail: "définir la résolution des courbes splines à",
            curvePoint: "coordonnée sur la courbe spline allant de %1 avec les ancres %2 et %3 jusqu'au point %4 à l'emplacement %5",
            curveTangent: "tangente sur la courbe spline allant de %1 avec les ancres %2 et %3 jusqu'au point %4 à l'emplacement %5",
            curveTightness: "définir la tension des courbes splines à",
            box: "dessiner une boite de taille",
            sphere: "dessiner une sphère de rayon",
            sphereDetail: "définir la résolution des sphères à",
            ellipseMode: "utiliser le mode %1 pour les ellipses",
            noSmooth: "désactiver le lissage",
            rectMode: "utiliser le mode %1 pour les rectangles",
            smooth: "activer le lissage",
            strokeCap: "utiliser des terminaisons",
            strokeJoin: "utiliser des jointures",
            strokeWeight: "définir l'épaisseur de contour à",
            beginShape: "commencer une forme avec le mode",
            bezierVertex: "placer un sommet de courbe de Bézier à",
            curveVertex: "placer un sommet de courbe spline à",
            endShape: "terminer une forme",
            texture: "utiliser la texture",
            textureMode: "utiliser le mode %1 pour se référer à la texture",
            vertex: "placer un sommet à",
            shape: "afficher la forme %1 à %2 %3 avec la taille %4 %5",
            shapeMode: "utiliser le mode %1 pour les formes",
            // debug
            print: "sortir le texte",
            println: "sortir la ligne",
            // transform
            applyMatrix: "appliquer la matrice",
            popMatrix: "dépiler la matrice",
            printMatrix: "sortir la matrice",
            pushMatrix: "empiler la matrice",
            resetMatrix: "réinitialiser la matrice",
            rotate: "tourner de",
            rotateX: "tourner sur l'axe X de",
            rotateY: "tourner sur l'axe Y de",
            rotateZ: "tourner sur l'axe Z de",
            scale: "redimensionner de",
            translate: "déplacer de",
            // effect
            // ...
            // colour
            background: "remplir l'arrière-plan avec",
            colorMode: "utiliser le mode de couleur %1 avec les limites %2 %3 %4 %5",
            fill: "définir la couleur de fond à",
            noFill: "désactiver le fond",
            noStroke: "désactiver le contour",
            stroke: "définir la couleur de contour à",
            alpha: "opacité dans",
            blendColor: "mélanger les couleurs %1 et %2 avec le mode %3",
            blue: "bleu dans",
            brightness: "luminosité dans",
            color: "couleur",
            green: "vert dans",
            hue: "teinte dans",
            lerpColor: "couleur interpolée entre %1 et %2 à l'emplacement %3",
            red: "rouge dans",
            saturation: "saturation dans",
            // image
            createImage: "créer une image de taille %1 %2",
            image: "afficher l'image %1 à %2 %3 avec la taille %4 %5",
            imageMode: "utiliser le mode %1 pour le positionnement des images",
            noTint: "désactiver le teint des images",
            tint: "utiliser pour les images un teint",
            blend: "mélanger la source à %1 %2 taille %3 %4 avec la destination à %5 %6 taille %7 %8 avec le mode %9",
            copy: "copier la source à %1 %2 taille %3 %4 sur la destination à %5 %6 taille %7 %8 avec le mode %9",
            filter: "appliquer le filtre %1 avec le niveau %2",
            get: "récupérer les pixels à %1 %2 taille %3 %4",
            loadPixels: "charger les pixels",
            pixels: "pixels",
            set: "placer à %1 %2 la couleur %3",
            updatePixels: "actualiser les pixels",
            // rendering
            createGraphics: "nouveau graphisme de taille %1 %2 avec le moteur %3",
            // typography
            // ...
         },
         code: {
            // shape
            arc: "arc",
            ellipse: "ellipse",
            line: "ligne",
            point: "point",
            quad: "quad",
            rect: "rect",
            triangle: "triangle",
            strokeWeight: "épaisseurContour",
            // color
            background: "arrièrePlan",
            colorMode: "modeCouleur",
            fill: "couleurFond",
            noFill: "pasDeFond",
            noStroke: "pasDeContour",
            stroke: "couleurContour"
         },
         description: {},
         values: {
            // environment
            ARROW: "Flèche",
            CROSS: "Croix",
            HAND: "Main",
            MOVE: "Déplacement",
            TEXT: "Texte",
            WAIT: "Attente",
            // shape
            CENTER: "Centre",
            RADIUS: "Rayon",
            CORNER: "Coin",
            CORNERS: "Coins",
            SQUARE: "carrées",
            PROJECT: "projetées",
            ROUND: "arrondies",
            MITER: "en onglet",
            BEVEL: "biseautées",
            POINTS: "points",
            LINES: "lignes",
            TRIANGLES: "triangles",
            TRIANGLE_FAN: "triangles en éventail",
            TRIANGLE_STRIP: "triangles en bande",
            QUADS: "quadrilatères",
            QUAD_STRIP: "quadrilatères en bande",
            IMAGE: "image",
            NORMALIZED: "normalisé",
            CLOSE: "fermée",
            // color
            RGB: "RVB",
            HSB: "TSL",
            BLEND: "fusion",
            ADD: "addition",
            SUBTRACT: "soustraction",
            DARKEST: "plus sombre",
            LIGHTEST: "plus lumineux",
            DIFFERENCE: "différence",
            EXCLUSION: "exclusion",
            MULTIPLY: "multiplication",
            SCREEN: "écran",
            OVERLAY: "recouvrement",
            HARD_LIGHT: "lumière dure",
            SOFT_LIGHT: "lumière douce",
            DODGE: "assombrissement",
            BURN: "éclaircissement",
            // image
            ARGB: "ARVB",
            ALPHA: "alpha",
            THRESHOLD: "Seuiller",
            GRAY: "Désaturer",
            INVERT: "Inverser",
            POSTERIZE: "Postériser",
            BLUR: "Flouter",
            OPAQUE: "Rendre opaque",
            ERODE: "Éroder",
            DILATE: "Dilater",
            // typography
            LEFT: "Gauche",
            RIGHT: "Droite",
            TOP: "Haut",
            BOTTOM: "Bas",
            BASELINE: "Ligne de base",
            MODEL: "Modèle",
            SCREEN: "Écran",
            SHAPE: "Forme"
         },
         startingBlockName: "Programme",
         messages: {}
      },
      none: {
         comment: {}
      }
   }

   var context = quickAlgoContext(display, infos);
   var strings = context.setLocalLanguageStrings(localLanguageStrings);   
   
   context.processing = {
      ops: []
   };

   context.provideBlocklyColours = function() {
      return {
         categories: {
            environment: 280,
            shape: 180,
            colour: 10
         }
      };
   };

   context.reset = function(taskInfos) {
      context.processing.ops = [];
      if (context.display) {
         context.resetDisplay();
      }
   };

   context.resetDisplay = function() {
      var canvas = $('<canvas>').css('border', '1px solid black');
      var coordinatesContainer = $('<div>').text(" ");
      $('#grid').empty().append(canvas, coordinatesContainer);

      var processingInstance = new Processing(canvas.get(0), function(processing) {
         processing.setup = function() {
            processing.size(300, 300);
            processing.background(255);
         };

         processing.draw = function() {
            for (var iOp = 0; iOp < context.processing.ops.length; iOp++) {
               var op = context.processing.ops[iOp];
               typeof processing[op.func] == 'function' ? processing[op.func].apply(processing, op.args) : processing[op.func];
            }
         };

         processing.mouseMoved = function() {
            coordinatesContainer.text(processing.mouseX + " × " + processing.mouseY);
         };
         processing.mouseDragged = function() {
            coordinatesContainer.find('span').remove();
            coordinatesContainer.append($('<span>').text(" — " + processing.mouseX + " × " + processing.mouseY));
         };
         processing.mouseOut = function() {
            if (coordinatesContainer.find('span').length > 0) {
               coordinatesContainer.find('span').remove();
            } else {
               coordinatesContainer.text(" ");
            }
         };
      });

      context.blocklyHelper.updateSize();
      context.updateScale();
   };

   context.unload = function() {
      if (context.display) {
      }
   };


   function drawOnBuffer() {
      var pg = Processing.createGraphics(300, 300);
      var ret;
      for (var iOp = 0; iOp < context.processing.ops.length; iOp++) {
         var op = context.processing.ops[iOp];
         ret = typeof pg[op.func] == 'function' ? pg[op.func].apply(pg, op.args) : pg[op.func];
      }
      return ret;
   }

   context.processing.commonOp = function() {
      var args = [];
      for (var iArg = 1; iArg < arguments.length - 1; iArg++) {
         args.push(arguments[iArg]);
      }
      context.processing.ops.push({ func: arguments[0], args: args });
      context.waitDelay(arguments[arguments.length - 1], drawOnBuffer());
   };


   context.customBlocks = {
      processing: {
         environment: [
            { name: "popStyle" },
            { name: "pushStyle" },
            //
            { name: "cursor", params: [{ options: ["ARROW", "CROSS", "HAND", "MOVE", "TEXT", "WAIT"] }] }, // variante : image, x y
            { name: "focused", yieldsValue: true },
            { name: "frameCount", yieldsValue: true },
            { name: "frameRate", params: ['Number'] }, // 60 par défaut
            { name: "__frameRate", yieldsValue: true },
            { name: "width", yieldsValue: true },
            { name: "height", yieldsValue: true },
            //
            { name: "resize", params: ['Number', 'Number'] }
         ],
         shape: [
            { name: "arc", params: ['Number', 'Number', 'Number', 'Number', 'Number', 'Number'] }, // les deux derniers paramètres sont des angles
            { name: "ellipse", params: ['Number', 'Number', 'Number', 'Number'] },
            { name: "line", params: ['Number', 'Number', 'Number', 'Number'] }, // variante : x1, y1, z1, x2, y2, z2
            { name: "point", params: ['Number', 'Number'] }, // variante : x, y, z
            { name: "quad", params: ['Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number'] },
            { name: "rect", params: ['Number', 'Number', 'Number', 'Number'] }, // variante ajoutant : radius ou (tlradius, trradius, brradius, blradius)
            { name: "triangle", params: ['Number', 'Number', 'Number', 'Number', 'Number', 'Number'] },
            //
            { name: "bezier", params: ['Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number'] }, // variante avec coordonnée z (12 paramètres)
            { name: "bezierDetail", params: ['Number'] },
            { name: "bezierPoint", params: ['Number', 'Number', 'Number', 'Number', 'Number'], yieldsValue: true },
            { name: "bezierTangent", params: ['Number', 'Number', 'Number', 'Number', 'Number'], yieldsValue: true },
            { name: "curve", params: ['Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number'] }, // variante avec coordonnée z (12 paramètres)
            { name: "curveDetail", params: ['Number'] },
            { name: "curvePoint", params: ['Number', 'Number', 'Number', 'Number', 'Number'], yieldsValue: true },
            { name: "curveTangent", params: ['Number', 'Number', 'Number', 'Number', 'Number'], yieldsValue: true },
            { name: "curveTightness", params: ['Number'] },
            //
            { name: "box", params: ['Number', 'Number', 'Number'] }, // variante avec un unique paramètre
            { name: "sphere", params: ['Number'] },
            { name: "sphereDetail", params: ['Number', 'Number'] }, // variante avec un unique paramètre
            //
            { name: "ellipseMode", params: [{ options: ["CENTER", "RADIUS", "CORNER", "CORNERS"] }] },
            { name: "noSmooth" },
            { name: "ellipseMode", params: [{ options: ["CENTER", "RADIUS", "CORNER", "CORNERS"] }] },
            { name: "smooth" },
            { name: "strokeCap", params: [{ options: ["SQUARE", "PROJECT", "ROUND"] }] },
            { name: "strokeJoin", params: [{ options: ["MITER", "BEVEL", "ROUND"] }] },
            { name: "strokeWeight", params: ['Number'] },
            // attention : les fonctions « vertex » ci-dessous ignorent scale()
            { name: "beginShape", params: [{ options: ["POINTS", "LINES", "TRIANGLES", "TRIANGLE_FAN", "TRIANGLE_STRIP", "QUADS", "QUAD_STRIP"] }] }, // variante sans paramètre
            { name: "bezierVertex", params: ['Number', 'Number', 'Number', 'Number', 'Number', 'Number'] }, // variante avec coordonnée z (9 paramètres)
            { name: "curveVertex", params: ['Number', 'Number'] }, // variante avec coordonnée z
            { name: "endShape", params: [{ options: ["CLOSE"] }] }, // variante sans paramètre
            { name: "texture", params: ['Image'] },
            { name: "textureMode", params: [{ options: ["IMAGE", "NORMALIZED"] }] },
            { name: "vertex", params: ['Number', 'Number', 'Number', 'Number', 'Number'] }, // variantes à 2, 3 et 4 paramètres
            //
            { name: "shape", params: ['Shape', 'Number', 'Number', 'Number', 'Number'] }, // variantes à 1 et 3 paramètres
            { name: "shapeMode", params: [{ options: ["CORNER", "CORNERS", "CENTER"] }] },
            //
            { name: "isVisible", yieldsValue: true },
            { name: "setVisible", params: ['Boolean'] },
            { name: "disableStyle" },
            { name: "enableStyle" },
            { name: "getChild", params: ['String'] }
         ],
         debug: [
            { name: "print", params: [null] },
            { name: "println", params: [null] }
         ],
         transform: [
            { name: "applyMatrix", params: ['Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number',
                  'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number',
                  'Number', 'Number'] },
            { name: "popMatrix" },
            { name: "printMatrix" },
            { name: "pushMatrix" },
            { name: "resetMatrix" },
            { name: "rotate", params: ['Number'] }, // le paramètre est un angle
            { name: "rotateX", params: ['Number'] }, // le paramètre est un angle
            { name: "rotateY", params: ['Number'] }, // le paramètre est un angle
            { name: "rotateZ", params: ['Number'] }, // le paramètre est un angle
            { name: "scale", params: ['Number', 'Number', 'Number'] }, // variantes à 1 et 2 paramètres
            { name: "translate", params: ['Number', 'Number', 'Number'] } // variantes à 2 paramètres
         ],
         effect: [
            { name: "ambientLight", params: ['Number', 'Number', 'Number', 'Number', 'Number', 'Number'] }, // variante à 3 paramètres
            { name: "directionalLight", params: ['Number', 'Number', 'Number', 'Number', 'Number', 'Number'] },
            { name: "lightFalloff", params: ['Number', 'Number', 'Number'] },
            { name: "lightSpecular", params: ['Number', 'Number', 'Number'] },
            { name: "lights" },
            { name: "noLights" },
            { name: "normal", params: ['Number', 'Number', 'Number'] },
            { name: "pointLight", params: ['Number', 'Number', 'Number', 'Number', 'Number', 'Number'] },
            { name: "spotLight", params: ['Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number'] },
            //
            { name: "beginCamera" },
            { name: "camera", params: ['Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number'] }, // variante sans paramètre
            { name: "endCamera" },
            { name: "frustum", params: ['Number', 'Number', 'Number', 'Number', 'Number', 'Number'] },
            { name: "ortho", params: ['Number', 'Number', 'Number', 'Number', 'Number', 'Number'] }, // variante sans paramètre
            { name: "perspective", params: ['Number', 'Number', 'Number', 'Number'] }, // variante sans paramètre
            { name: "printCamera" },
            { name: "printProjection" },
            //
            { name: "modelX", params: ['Number', 'Number', 'Number'], yieldsValue: true },
            { name: "modelY", params: ['Number', 'Number', 'Number'], yieldsValue: true },
            { name: "modelZ", params: ['Number', 'Number', 'Number'], yieldsValue: true },
            { name: "screenX", params: ['Number', 'Number', 'Number'], yieldsValue: true },
            { name: "screenY", params: ['Number', 'Number', 'Number'], yieldsValue: true },
            { name: "screenZ", params: ['Number', 'Number', 'Number'], yieldsValue: true },
            //
            { name: "ambient", params: ['Number', 'Number', 'Number'] }, // variante : gray + palette
            { name: "emissive", params: ['Number', 'Number', 'Number'] }, // variante : gray + palette
            { name: "shininess", params: ['Number'] },
            { name: "specular", params: ['Number', 'Number', 'Number'] }, // variante : gray + palette
         ],
         colour: [
            { name: "background", params: ['Number', 'Number', 'Number', 'Number'] }, // variantes à 1, 2 et 3 paramètres + palette + image
            { name: "colorMode", params: [{ options: ["RGB", "HSB"] }, 'Number', 'Number', 'Number', 'Number'] }, // variantes à 1, 2 et 4 paramètres
            { name: "fill", params: ['Number', 'Number', 'Number'] }, // variantes à 1, 2 et 3 paramètres + palette
            { name: "noFill" },
            { name: "noStroke" },
            { name: "stroke", params: ['Number', 'Number', 'Number'] }, // variantes à 1, 2 et 3 paramètres + palette
            //
            { name: "alpha", params: ['Colour'], yieldsValue: true },
            { name: "blendColor", params: ['Colour', 'Colour',
                  { options: ["BLEND", "ADD", "SUBTRACT", "DARKEST", "LIGHTEST", "DIFFERENCE", "EXCLUSION", "MULTIPLY", "SCREEN",
                     "OVERLAY", "HARD_LIGHT", "SOFT_LIGHT", "DODGE", "BURN"] }],
               yieldsValue: true },
            { name: "blue", params: ['Colour'], yieldsValue: true },
            { name: "brightness", params: ['Colour'], yieldsValue: true },
            { name: "color", params: ['Number', 'Number', 'Number', 'Number'], yieldsValue: true }, // variantes à 1, 2 et 3 paramètres + palette
            { name: "green", params: ['Colour'], yieldsValue: true },
            { name: "hue", params: ['Colour'], yieldsValue: true },
            { name: "red", params: ['Colour'], yieldsValue: true },
            { name: "saturation", params: ['Colour'], yieldsValue: true }
         ],
         image: [
            { name: "createImage", params: ['Number', 'Number', { options: ["RGB", "ARGB", "ALPHA"] }], yieldsValue: true },
            //
            { name: "image", params: ['Image', 'Number', 'Number', 'Number', 'Number'] }, // variante à 3 paramètres
            { name: "imageMode", params: [{ options: ["CORNER", "CORNERS", "CENTER"] }] },
            { name: "noTint" },
            { name: "tint", params: ['Number', 'Number', 'Number', 'Number'] }, // variantes à 1, 2 et 3 paramètres + palette
            //
            { name: "blend", params: ['Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number',
                  { options: ["BLEND", "ADD", "SUBTRACT", "DARKEST", "LIGHTEST", "DIFFERENCE", "EXCLUSION", "MULTIPLY", "SCREEN",
                     "OVERLAY", "HARD_LIGHT", "SOFT_LIGHT", "DODGE", "BURN"] }] }, // variante : ajout d’un premier paramètre image
            { name: "copy", params: ['Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number', 'Number'] }, // variante : ajout d’un premier paramètre image
            { name: "filter", params: [{ options: ["THRESHOLD", "GRAY", "INVERT", "POSTERIZE", "BLUR", "OPAQUE", "ERODE",
                     "DILATE"] }, 'Number'] }, // variante à 1 paramètre + image
            { name: "get", params: ['Number', 'Number', 'Number', 'Number'], yieldsValue: true }, // variantes à 0 et 2 paramètres
            { name: "loadPixels" },
            { name: "pixels", yieldsValue: true },
            { name: "set", params: ['Number', 'Number', 'Colour'] }, // variante : image en troisième paramètre
            { name: "updatePixels" }
         ],
         rendering: [
            { name: "createGraphics", params: ['Number', 'Number', { options: ["P2D", "P3D", "JAVA2D"] }] }
         ],
         typography: [
            { name: "createFont", params: ['String', 'Number'], yieldsValue: true },
            { name: "loadFont", params: ['String'], yieldsValue: true },
            { name: "text", params: ['String', 'Number', 'Number', 'Number', 'Number'] }, // variante : data, x, y + éventuel ajout de z
            { name: "textFont", params: ['Font', 'Number'] },
            //
            { name: "textAlign", params: [{ options: ["LEFT", "CENTER", "RIGHT"] }, { options: ["TOP", "BOTTOM", "CENTER", "BASELINE"] }] },
            { name: "textLeading", params: ['Number'] },
            { name: "textMode", params: [{ options: ["MODEL", "SCREEN", "SHAPE"] }] },
            { name: "textSize", params: ['Number'] },
            { name: "textWidth", params: ['String'] },
            //
            { name: "textAscent", yieldsValue: true },
            { name: "textDescent", yieldsValue: true }
         ],
      }
   };

   var typeKeywords = {
      'Number': { pType: 'input_value', vType: 'math_number', fName: 'NUM', defVal: 0 },
      'Colour': { pType: 'input_value', vType: 'field_colour', fName: 'COL', defVal: "#ff0000" }
   };
   for (var category in context.customBlocks.processing) {
      for (var iFunc = 0; iFunc < context.customBlocks.processing[category].length; iFunc++) {
         (function() {
            var func = context.customBlocks.processing[category][iFunc];
            if (!context.processing[func.name]) {
               if (func.params) {
                  func.blocklyJson = $.extend({ inputsInline: true, args0: {} }, func.blocklyJson);
                  func.blocklyXml = '<block type="' + func.name + '">';
                  var funcArgs = func.blocklyJson.args0;
                  for (var iParam = 0; iParam < func.params.length; iParam++) {
                     var paramType = func.params[iParam];
                     if (paramType != null) {
                        var paramData;
                        if (paramType.options) {
                           paramData = { pType: 'field_dropdown' };
                           funcArgs[iParam] = $.extend({ options: [] }, funcArgs[iParam]);
                           for (var iValue = 0; iValue < paramType.options.length; iValue++) {
                              funcArgs[iParam].options.push([strings.values[paramType.options[iValue]],
                                 typeof Processing !== 'undefined' ? Processing[paramType.options[iValue]] : paramType.options[iValue]]);
                           }
                           func.params[iParam] = 'Choice';
                        } else {
                           paramData = typeKeywords[paramType] || { pType: 'input_value' };
                        }
                        funcArgs[iParam] = $.extend({ type: paramData.pType, name: "PARAM_" + iParam }, funcArgs[iParam]);
                        if (paramData.colour) {
                           funcArgs[iParam].colour = paramData.colour;
                        } else if (paramData.vType) {
                           func.blocklyXml +=
                              '<value name="PARAM_' + iParam + '"><shadow type="' + paramData.vType + '">' +
                                 '<field name="' + paramData.fName + '">' + paramData.defVal + '</field>' +
                              '</shadow></value>';
                        }
                     }
                  }
                  func.blocklyXml += '</block>';
               }
               context.processing[func.name] = function() {
                  context.processing.commonOp.apply(null, [func.name].concat(Array.apply(null, arguments)));
               };
            }
         })();
      }
   }


   context.getItems = function(row, col, filters) {
      var listItems = [];
      for (var iItem = 0; iItem < context.items.length; iItem++) {
         var item = context.items[iItem];
         var itemType = infos.itemTypes[item.type];
         if ((row == undefined) || ((item.row == row) && (item.col == col))) {
            var accepted = true;
            for (var property in filters) {
               var value = filters[property];
               if ((itemType[property] == undefined) && (value != undefined)) {
                  accepted = false;
                  break;
               }
               if ((itemType[property] != undefined) && (itemType[property] != value)) {
                  accepted = false;
                  break;
               }
            }
            if (accepted) {
               item.index = iItem;
               listItems.push(item);
            }
         }
      }
      return listItems;
   };

   context.updateScale = function() {
      if (!context.display) {
         return;
      }
   };


   return context;
}