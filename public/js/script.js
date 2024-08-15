var canvas

$(document).ready(function () {
    canvas = new fabric.Canvas('logo-canvas');

    canvas.setWidth(855);
    canvas.setHeight(590);

    // canvas.setWidth(505);
    // canvas.setHeight(440);


    // load image 

    // Function to load and display car.svg from the root directory
    function loadCarSVG() {
        $.ajax({
            url: 'category-image/' + image,
            dataType: 'text',
            success: function (svgString) {
                // Clear the canvas and color palettes
                canvas.clear();
                $('#color-palettes').empty();

                // Load the SVG
                // fabric.loadSVGFromString(svgString, function (objects, options) {
                //     // Calculate the center of the canvas
                //     var canvasCenter = {
                //         left: canvas.width / 2,
                //         top: canvas.height / 2
                //     };

                //     // Calculate the bounding box of the combined objects
                //     var boundingBox = new fabric.Group(objects).getBoundingRect();

                //     // Calculate the offset to center the bounding box
                //     var offset = {
                //         left: canvasCenter.left - boundingBox.width / 2,
                //         top: canvasCenter.top - boundingBox.height / 2
                //     };

                //     // Add each object to the canvas and adjust its position
                //     objects.forEach(function (obj, index) {
                //         // Set the object position to center the bounding box
                //         obj.set({
                //             left: obj.left + offset.left - boundingBox.left,
                //             top: obj.top + offset.top - boundingBox.top,
                //             selectable: true,
                //             evented: true
                //         });
                //         canvas.add(obj);

                //         // Create a color picker for each layer
                //         var colorPicker = $('<input/>', {
                //             type: 'color',
                //             id: 'color-picker-' + index,
                //             value: obj.fill || '#000000',
                //             class: 'form-control mt-2 colorPicker'
                //         });

                //         // Create a label for each color picker
                //         var label = $('<label/>', {
                //             for: 'color-picker-' + index,
                //             class: 'color-picker-container'
                //         });

                //         // Add the label and color picker to the color-palettes div
                //         $('#color-palettes').append(label).append(colorPicker);

                //         // Add input event to update the color of the selected layer in real-time
                //         colorPicker.on('input', function () {
                //             var selectedLayerIndex = parseInt($(this).attr('id').split('-').pop());
                //             var selectedLayer = canvas.getObjects()[selectedLayerIndex];
                //             if (selectedLayer) {
                //                 selectedLayer.set('fill', $(this).val());
                //                 canvas.renderAll();
                //             }
                //         });
                //     });

                //     canvas.renderAll();
                // });

                fabric.loadSVGFromString(svgString, function (objects, options) {
                    // Create a temporary group to calculate the bounding box and center it
                    var group = new fabric.Group(objects);
                    canvas.add(group);

                    // Calculate the center point of the canvas
                    var canvasCenter = {
                        left: canvas.width / 2,
                        top: canvas.height / 2
                    };

                    // Center the group on the canvas
                    group.originX = 'center';
                    group.originY = 'center';
                    group.left = canvasCenter.left;
                    group.top = canvasCenter.top;
                    group.setCoords();

                    // Ungroup the objects and add them back to the canvas
                    var ungroupedObjects = group.getObjects();
                    group.destroy();
                    canvas.remove(group);

                    ungroupedObjects.forEach(function (obj, index) {
                        // Set the object as selectable and evented
                        obj.set({
                            selectable: true,
                            evented: true
                        });

                        canvas.add(obj);

                        // Create a color picker for each layer
                        var colorPicker = $('<input/>', {
                            type: 'color',
                            id: 'color-picker-' + index,
                            value: obj.fill || '#000000',
                            class: 'form-control mt-2 colorPicker'
                        });

                        // Create a label for each color picker
                        // var label = $('<label/>', {
                        //     for: 'color-picker-' + index,
                        //     class: 'color-picker-container'
                        // }).text('Layer ' + (index + 1));

                        // Add the label and color picker to the color-palettes div
                        $('#color-palettes').append(colorPicker);

                        // Add input event to update the color of the selected layer in real-time
                        colorPicker.on('input', function () {
                            var selectedLayerIndex = parseInt($(this).attr('id').split('-').pop());
                            var selectedLayer = canvas.getObjects()[selectedLayerIndex];
                            if (selectedLayer) {
                                selectedLayer.set('fill', $(this).val());
                                canvas.renderAll();
                            }
                        });
                    });

                    canvas.renderAll();
                });


                // Update color picker and text settings when a layer is selected
                canvas.on('object:selected', function (e) {
                    var activeObject = e.target;
                    var selectedIndex = canvas.getObjects().indexOf(activeObject);

                    // Highlight the corresponding color picker
                    $('#color-palettes input').each(function () {
                        $(this).parent().removeClass('highlighted');
                    });

                    $('#color-picker-' + selectedIndex).parent().addClass('highlighted');

                    // Update the text, text color, and font family for the selected text layer
                    if (activeObject.type === 'textbox') {
                        $('#logo-text').val(activeObject.text || '');
                        $('#text-color').val(activeObject.fill || '#000000');
                        $('#font-family').val(activeObject.fontFamily || 'Arial');
                        $('#italic-text').toggleClass('active', activeObject.fontStyle === 'italic');
                        $('#bold-text').toggleClass('active', activeObject.fontWeight === 'bold');
                        $('#small-text').toggleClass('active', activeObject.fontSize && activeObject.fontSize < 20);
                        $('#caps-text').prop('checked', activeObject.textTransform === 'uppercase');
                        $('#text-curve').prop('checked', activeObject.get('path') ? true : false);
                        $('#text-outline').prop('checked', activeObject.stroke ? true : false);
                        $('#text-shadow').prop('checked', activeObject.shadow ? true : false);
                    } else {
                        $('#logo-text').val('');
                        $('#text-color').val('');
                        $('#font-family').val('Arial');
                        $('#italic-text').removeClass('active');
                        $('#bold-text').removeClass('active');
                        $('#small-text').removeClass('active');
                        $('#caps-text').prop('checked', false);
                        $('#text-curve').prop('checked', false);
                        $('#text-outline').prop('checked', false);
                        $('#text-shadow').prop('checked', false);
                    }
                });

                // Deselect object
                canvas.on('before:selection:cleared', function () {
                    $('#logo-text').val('');
                    $('#text-color').val('');
                    $('#font-family').val('Arial');
                    $('#color-palettes input').each(function () {
                        $(this).parent().removeClass('highlighted');
                    });
                    $('#italic-text').removeClass('active');
                    $('#bold-text').removeClass('active');
                    $('#small-text').removeClass('active');
                    $('#caps-text').prop('checked', false);
                    $('#text-curve').prop('checked', false);
                    $('#text-outline').prop('checked', false);
                    $('#text-shadow').prop('checked', false);
                });

                // Update the text for the selected textbox
                $('#logo-text').on('input', function () {
                    var activeObject = canvas.getActiveObject();
                    if (activeObject && activeObject.type === 'textbox') {
                        activeObject.set('text', $(this).val());
                        canvas.renderAll();
                    }
                });

                // Update the text color for the selected textbox
                $('#text-color').on('input', function () {
                    var activeObject = canvas.getActiveObject();
                    if (activeObject && activeObject.type === 'textbox') {
                        activeObject.set('fill', $(this).val());
                        canvas.renderAll();
                    }
                });

                // Update the font family for the selected textbox
                $('#font-family').change(function () {
                    var activeObject = canvas.getActiveObject();
                    if (activeObject && activeObject.type === 'textbox') {
                        activeObject.set('fontFamily', $(this).val());
                        canvas.renderAll();
                    }
                });

                // Toggle italic text
                $('#italic-text').click(function () {
                    var activeObject = canvas.getActiveObject();
                    if (activeObject && activeObject.type === 'textbox') {
                        var newFontStyle = activeObject.fontStyle === 'italic' ? '' : 'italic';
                        activeObject.set('fontStyle', newFontStyle);
                        $(this).toggleClass('active', newFontStyle === 'italic');
                        canvas.renderAll();
                    }
                });

                // Toggle bold text
                $('#bold-text').click(function () {
                    var activeObject = canvas.getActiveObject();
                    if (activeObject && activeObject.type === 'textbox') {
                        var newFontWeight = activeObject.fontWeight === 'bold' ? '' : 'bold';
                        activeObject.set('fontWeight', newFontWeight);
                        $(this).toggleClass('active', newFontWeight === 'bold');
                        canvas.renderAll();
                    }
                });

                // Delete selected layer
                $('#delete-button').click(function () {
                    var activeObject = canvas.getActiveObject();
                    if (activeObject) {
                        canvas.remove(activeObject)
                    }
                });

                // Toggle small text size
                $('#small-text').click(function () {
                    var activeObject = canvas.getActiveObject();
                    if (activeObject && activeObject.type === 'textbox') {
                        var newSize = activeObject.fontSize < 20 ? 14 : 24;
                        activeObject.set('fontSize', newSize);
                        $(this).toggleClass('active', newSize < 20);
                        canvas.renderAll();
                    }
                });

                // Toggle all caps
                $('#caps-text').change(function () {
                    var activeObject = canvas.getActiveObject();
                    if (activeObject && activeObject.type === 'textbox') {
                        var newTextTransform = $(this).is(':checked') ? 'uppercase' : 'none';
                        activeObject.set('textTransform', newTextTransform);
                        canvas.renderAll();
                    }
                });

                // Apply outline effect
                $('#text-outline').change(function () {
                    var activeObject = canvas.getActiveObject();
                    if (activeObject && activeObject.type === 'textbox') {
                        if ($(this).is(':checked')) {
                            activeObject.set('stroke', $('#text-color').val());
                            activeObject.set('strokeWidth', 2);
                        } else {
                            activeObject.set('stroke', null);
                            activeObject.set('strokeWidth', 0);
                        }
                        canvas.renderAll();
                    }
                });

                // Apply shadow effect
                $('#text-shadow').change(function () {
                    var activeObject = canvas.getActiveObject();
                    if (activeObject && activeObject.type === 'textbox') {
                        if ($(this).is(':checked')) {
                            activeObject.set('shadow', {
                                color: 'rgba(0,0,0,0.3)',
                                offsetX: 2,
                                offsetY: 2,
                                blur: 5
                            });
                        } else {
                            activeObject.set('shadow', null);
                        }
                        canvas.renderAll();
                    }
                });

                // Add "Sample 1" text element


                // Get the session company value and escape single quotes


                // Create the textbox with the session company value
                var sampleText1 = new fabric.Textbox(company, {
                    left: canvas.width / 2 - 57, // Position the text
                    top: canvas.height / 2 + 120, // Position the text
                    fontSize: 30,
                    fill: '#000000',
                    fontFamily: 'Arial',
                    textAlign: 'center',
                    selectable: true,
                    evented: true
                });


                // Add "Sample 2" text element
                var sampleText2 = new fabric.Textbox('Slogan Here', {
                    left: canvas.width / 2 - 40, // Position the text
                    top: canvas.height / 2 + 180, // Position the text
                    fontSize: 14,
                    width: 80,
                    fill: '#000000',
                    fontFamily: 'Arial',
                    textAlign: 'center',
                    selectable: true,
                    evented: true
                });

                // Add the text elements to the canvas
                canvas.add(sampleText1);
                canvas.add(sampleText2);
                // canvas.clearHistory()
                canvas.renderAll();
            },
            error: function (xhr, status, error) {
                console.error("Error loading SVG:", status, error);
            }
        });
    }

    loadCarSVG();

    // load image

    // Handle SVG file upload
    $('#upload-logo').change(function (e) {
        var reader = new FileReader();
        reader.onload = function (event) {
            var svgString = event.target.result;

            // Clear the canvas and color palettes
            canvas.clear();
            $('#color-palettes').empty();

            // Load the SVG
            fabric.loadSVGFromString(svgString, function (objects, options) {
                // Calculate the center of the canvas
                var canvasCenter = {
                    left: canvas.width / 2,
                    top: canvas.height / 2
                };

                // Calculate the bounding box of the combined objects
                var boundingBox = new fabric.Group(objects).getBoundingRect();

                // Calculate the offset to center the bounding box
                var offset = {
                    left: canvasCenter.left - boundingBox.width / 2,
                    top: canvasCenter.top - boundingBox.height / 2
                };

                // Add each object to the canvas and adjust its position
                objects.forEach(function (obj, index) {
                    // Set the object position to center the bounding box
                    obj.set({
                        left: obj.left + offset.left - boundingBox.left,
                        top: obj.top + offset.top - boundingBox.top,
                        selectable: true,
                        evented: true
                    });
                    canvas.add(obj);

                    // Create a color picker for each layer
                    var colorPicker = $('<input/>', {
                        type: 'color',
                        id: 'color-picker-' + index,
                        value: obj.fill || '#000000',
                        class: 'form-control mt-2 colorPicker'
                    });

                    // Create a label for each color picker
                    var label = $('<label/>', {
                        for: 'color-picker-' + index,
                        class: 'color-picker-container'
                    });

                    // Add the label and color picker to the color-palettes div
                    $('#color-palettes').append(label).append(colorPicker);

                    // Add input event to update the color of the selected layer in real-time
                    colorPicker.on('input', function () {
                        var selectedLayerIndex = parseInt($(this).attr('id').split('-').pop());
                        var selectedLayer = canvas.getObjects()[selectedLayerIndex];
                        if (selectedLayer) {
                            selectedLayer.set('fill', $(this).val());
                            canvas.renderAll();
                        }
                    });
                });

                canvas.renderAll();
            });



            // Update color picker and text settings when a layer is selected
            canvas.on('object:selected', function (e) {
                var activeObject = e.target;
                var selectedIndex = canvas.getObjects().indexOf(activeObject);

                // Highlight the corresponding color picker
                $('#color-palettes input').each(function () {
                    $(this).parent().removeClass('highlighted');
                });

                $('#color-picker-' + selectedIndex).parent().addClass('highlighted');

                // Update the text, text color, and font family for the selected text layer
                if (activeObject.type === 'textbox') {
                    $('#logo-text').val(activeObject.text || '');
                    $('#text-color').val(activeObject.fill || '#000000');
                    $('#font-family').val(activeObject.fontFamily || 'Arial');
                    $('#italic-text').toggleClass('active', activeObject.fontStyle === 'italic');
                    $('#bold-text').toggleClass('active', activeObject.fontWeight === 'bold');
                    $('#small-text').toggleClass('active', activeObject.fontSize && activeObject.fontSize < 20);
                    $('#caps-text').prop('checked', activeObject.textTransform === 'uppercase');
                    $('#text-curve').prop('checked', activeObject.get('path') ? true : false);
                    $('#text-outline').prop('checked', activeObject.stroke ? true : false);
                    $('#text-shadow').prop('checked', activeObject.shadow ? true : false);
                } else {
                    $('#logo-text').val('');
                    $('#text-color').val('');
                    $('#font-family').val('Arial');
                    $('#italic-text').removeClass('active');
                    $('#bold-text').removeClass('active');
                    $('#small-text').removeClass('active');
                    $('#caps-text').prop('checked', false);
                    $('#text-curve').prop('checked', false);
                    $('#text-outline').prop('checked', false);
                    $('#text-shadow').prop('checked', false);
                }
            });

            // Deselect object
            canvas.on('before:selection:cleared', function () {
                $('#logo-text').val('');
                $('#text-color').val('');
                $('#font-family').val('Arial');
                $('#color-palettes input').each(function () {
                    $(this).parent().removeClass('highlighted');
                });
                $('#italic-text').removeClass('active');
                $('#bold-text').removeClass('active');
                $('#small-text').removeClass('active');
                $('#caps-text').prop('checked', false);
                $('#text-curve').prop('checked', false);
                $('#text-outline').prop('checked', false);
                $('#text-shadow').prop('checked', false);
            });

            // Update the text for the selected textbox
            $('#logo-text').on('input', function () {
                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'textbox') {
                    activeObject.set('text', $(this).val());
                    canvas.renderAll();
                }
            });

            // Update the text color for the selected textbox
            $('#text-color').on('input', function () {
                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'textbox') {
                    activeObject.set('fill', $(this).val());
                    canvas.renderAll();
                }
            });

            // Update the font family for the selected textbox
            $('#font-family').change(function () {
                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'textbox') {
                    activeObject.set('fontFamily', $(this).val());
                    canvas.renderAll();
                }
            });

            // Toggle italic text
            $('#italic-text').click(function () {
                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'textbox') {
                    var newFontStyle = activeObject.fontStyle === 'italic' ? '' : 'italic';
                    activeObject.set('fontStyle', newFontStyle);
                    $(this).toggleClass('active', newFontStyle === 'italic');
                    canvas.renderAll();
                }
            });

            // Toggle bold text
            $('#bold-text').click(function () {
                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'textbox') {
                    var newFontWeight = activeObject.fontWeight === 'bold' ? '' : 'bold';
                    activeObject.set('fontWeight', newFontWeight);
                    $(this).toggleClass('active', newFontWeight === 'bold');
                    canvas.renderAll();
                }
            });

            // Toggle small text size
            $('#small-text').click(function () {
                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'textbox') {
                    var newSize = activeObject.fontSize < 20 ? 14 : 24;
                    activeObject.set('fontSize', newSize);
                    $(this).toggleClass('active', newSize < 20);
                    canvas.renderAll();
                }
            });

            // Toggle all caps
            $('#caps-text').change(function () {
                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'textbox') {
                    var newTextTransform = $(this).is(':checked') ? 'uppercase' : 'none';
                    activeObject.set('textTransform', newTextTransform);
                    canvas.renderAll();
                }
            });

            // // Apply curve effect
            // $('#text-curve').change(function() {
            //     var activeObject = canvas.getActiveObject();
            //     if (activeObject && activeObject.type === 'textbox') {
            //         if ($(this).is(':checked')) {
            //             // Apply curve effect
            //             // Adjust these values to control the curve's appearance
            //             var curveRadius = 360; // Radius of the curve
            //             var curveFactor = 1.8; // The degree of the curve

            //             activeObject.set('angle', 0);
            //             var path = new fabric.Path('M 0 0 C 0 ' + (curveRadius * curveFactor) + ' ' + (activeObject.width * curveFactor) + ' ' + (activeObject.height * curveFactor) + ' ' + (activeObject.width) + ' 0', {
            //                 left: activeObject.left,
            //                 top: activeObject.top,
            //                 fill: '',
            //                 stroke: 'transparent',
            //                 selectable: false
            //             });

            //             canvas.add(path);
            //             canvas.bringToFront(path); // Ensure the path is behind the text

            //             // Apply the curve effect
            //             activeObject.set({
            //                 path: path
            //             });
            //         } else {
            //             // Remove the curve effect
            //             activeObject.set({
            //                 path: null
            //             });
            //         }
            //         canvas.renderAll();
            //     }
            // });


            // Apply outline effect
            $('#text-outline').change(function () {
                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'textbox') {
                    if ($(this).is(':checked')) {
                        activeObject.set('stroke', $('#text-color').val());
                        activeObject.set('strokeWidth', 2);
                    } else {
                        activeObject.set('stroke', null);
                        activeObject.set('strokeWidth', 0);
                    }
                    canvas.renderAll();
                }
            });

            // Apply shadow effect
            $('#text-shadow').change(function () {
                var activeObject = canvas.getActiveObject();
                if (activeObject && activeObject.type === 'textbox') {
                    if ($(this).is(':checked')) {
                        activeObject.set('shadow', {
                            color: 'rgba(0,0,0,0.3)',
                            offsetX: 2,
                            offsetY: 2,
                            blur: 5
                        });
                    } else {
                        activeObject.set('shadow', null);
                    }
                    canvas.renderAll();
                }
            });

        };
        reader.readAsText(e.target.files[0]);
    });

    // Add text to the canvas
    $('#add-text').click(function () {
        var text = new fabric.Textbox($('#logo-text').val(), {
            left: 100,
            top: 100,
            fill: $('#text-color').val(),
            fontFamily: $('#font-family').val(),
            fontSize: $('#small-text').hasClass('active') ? 14 : 24,
            fontWeight: $('#bold-text').hasClass('active') ? 'bold' : '',
            fontStyle: $('#italic-text').hasClass('active') ? 'italic' : '',
            textTransform: $('#caps-text').is(':checked') ? 'uppercase' : 'none',
        });
        canvas.add(text);
        canvas.renderAll();
    });

    // Save the canvas content as an image
    $('#download-logo').click(function () {
        var dataURL = canvas.toDataURL({
            format: 'png',
            quality: 1
        });
        var link = document.createElement('a');
        link.href = dataURL;
        link.download = 'logo.png';
        link.click();
    });

    // $('.redirect-to-pckgs-btn').click(function() {
    //     var dataURL = canvas.toDataURL({
    //         format: 'png',
    //         quality: 1
    //     });
    //     sessionStorage.setItem('logoDataUrl', dataURL)
    //     location.assign("/packages")
    // })

    // Delete the current logo

    $('#delete-logo').click(function () {
        canvas.clearmaker();
        $('#color-palettes').empty(); // Clear the color palettes
    });

    // Trigger color palette updates on canvas interactions
    canvas.on('after:render', function () {
        $('#color-palettes input').each(function () {
            var colorPickerId = $(this).attr('id');
            var index = parseInt(colorPickerId.split('-').pop());
            var layer = canvas.getObjects()[index];
            if (layer) {
                $(this).val(layer.fill || '#000000');
            }
        });
    });

    // Update logo color for non-text objects
    $('#logo-color').change(function () {
        var activeObject = canvas.getActiveObject();
        if (activeObject && activeObject.type !== 'textbox') {
            activeObject.set('fill', $(this).val());
            canvas.renderAll();
        }
    });

    // Update the background color for the canvas
    $('#background-color').on('input', function () {
        canvas.setBackgroundColor($(this).val(), canvas.renderAll.bind(canvas));
    });
})

document.addEventListener('keydown', ({ keyCode, ctrlKey }) => {
    // Check Ctrl key is pressed.
    if (!ctrlKey) {
        return
    }

    // Check pressed button is Z - Ctrl+Z.
    if (keyCode === 90) {
        canvas.undo()
    }

    // Check pressed button is Y - Ctrl+Y.
    if (keyCode === 89) {
        canvas.redo()
    }
})

$('#undo-button').click(function() {
    canvas.undo()
})

$('#redo-button').click(function() {
    canvas.redo()
})
