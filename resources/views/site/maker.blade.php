<!-- resources/views/site/main.blade.php -->
@extends('site.common')

@section('title', 'Logo Maker')

@section('content')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

    <style>
        /* body {
                        font-family: Arial, sans-serif;

                    } */

        .col-md-2 {
            flex: 0 0 auto;
            width: 16.66666667%;
            border-radius: 10px;
            padding:

        }

        .font-label {
            font-weight: bold;
        }

        .main-section {
            background-color: #E9EDFF;
            padding: 20px;
            margin-bottom: 20px;
        }

        .custom-button-maker,
        .action-button {
            padding: 10px;
            border-radius: 5px;
            color: #fff;
            background-color: #646BD9;
            font-size: 15px;
            font-weight: 700;
            line-height: 24px;
            text-align: center;
            border-color: #646BD9;
            margin-top: 20px;
        }

        .btn-danger {
            padding: 10px;
            border-radius: 5px;
            color: #fff;
            background-color: red;
            font-size: 15px;
            font-weight: 700;
            line-height: 24px;
            text-align: center;
            border-color: red;
            margin-top: 20px;
        }

        #text-section {
            margin-top: 20px;
        }

        .font-item {
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100px;
            width: 100%;
            border: 2px solid rgb(255, 255, 255);
            margin-bottom: 10px;
            cursor: pointer;
            border-radius: 5px;
            background-color: white;
            transition: box-shadow 0.9s ease;
            /* Smooth transition for box-shadow */
        }

        .font-item:hover {
            box-shadow: 0 4px 8px rgba(46, 46, 46, 0.1);
            /* Box shadow on hover */
            border: 2px solid rgb(0, 0, 0);

        }

        .font-sample {
            font-size: 1.5em;
        }

        .selected {
            background-color: #6a70d6 !important;
            color: white;
        }

        footer {
            background-color: white;
            padding: 20px 0;
            text-align: center;
        }

        .btn-back {
            background: none;
            border: none;
            color: black;
            font-size: 1.1em;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .btn-back i {
            margin-right: 5px;
        }

        .btn-skip {
            width: 10%;
        }

        .button-container {
            display: flex;
            justify-content: center;
            gap: 20px;
        }

        /* custom css for editor */

        /* @font-face {
                font-family: 'Roboto';
                src: url('fonts/Roboto-Regular.ttf') format('truetype');
            }

            @font-face {
                font-family: 'Open Sans';
                src: url('fonts/OpenSans-Regular.ttf') format('truetype');
            }

            @font-face {
                font-family: 'Lato';
                src: url('fonts/Lato-Regular.ttf') format('truetype');
            }

            @font-face {
                font-family: 'Montserrat';
                src: url('fonts/Montserrat-Regular.ttf') format('truetype');
            }

            @font-face {
                font-family: 'Poppins';
                src: url('fonts/Poppins-Regular.ttf') format('truetype');
            } */

        #logo-canvas {
            border: 1px solid #ddd;
        }

        .color-picker-container {
            margin-bottom: 10px;
        }

        .color-picker-container label {
            display: block;
        }

        .highlighted {
            background-color: #f0f0f0;
        }

        .font-preview {
            display: block;
            font-size: 14px;
            margin: 2px 0;
        }

        .btn-group {
            margin-bottom: 10px;

        }

        .text-effects label {
            margin-right: 15px;
        }

        .font-label {
            margin-top: 2px;
        }

        /* Container for color pickers to ensure they stay in one row or adjust to space */
        .colorPickerContainer {
            display: flex;
            /* Align color pickers in a row */
            flex-wrap: wrap;
            /* Allow wrapping if there's not enough space */
            gap: 10px;
            /* Space between color pickers */
        }

        /* Individual color picker style */
        .colorPicker {
            width: 50px;
            /* Set a fixed width for each color picker */
            height: 40px;
            /* Set a fixed height for color pickers (adjust as needed) */
            padding: 0%;
            border: 1px;

        }

        .form-control {
            display: inline-block;
            margin-bottom: 5px;
        }

        .upper-canvas {
            /* Default styles */
            width: 100%;
            height: auto;
            /* Adjust height according to content */
            max-width: 1200px;
            /* Set a maximum width for larger screens */
            margin: 0 auto;
            /* Center align the canvas */
        }

        /* New Toolbar Style */

        .sidebar {
            height: auto;
            width: 250px;
            /* position: fixed; */
            top: 0;
            left: 0;
            background-color: #343a40;
            padding: 20px;
            color: #fff;
            /* margin-bottom: -50px */
        }

        .sidebar .btn {
            width: 100%;
            margin-bottom: 10px;
            background-color: #495057;
            color: #fff;
            border: none;
        }

        .sidebar .btn:hover {
            background-color: #6c757d;
        }

        .sidebar .form-check,
        .sidebar .form-group {
            margin-bottom: 15px;
        }

        .colorPickerContainer {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .colorPickerContainer label {
            margin-right: 10px;
        }

        .content {
            margin-left: 270px;
            padding: 20px;
        }

        .btn-danger {
            background-color: #dc3545;
            border: none;
        }

        .btn-danger:hover {
            background-color: #c82333;
        }

        canvas.upper-canvas {
            background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
            background-repeat: repeat;
        }
    </style>
    <!----------------------------------------- Banner Section ------------------------------->


    <!-- <div class="container mt-5"> -->
    <div class="container-fluid ps-0">
        <div class="row">
            <div class="col-md-4">
                <div class="container-custom">

                    <div class="sidebar">
                        <button id="italic-text" class="btn"><i class="fas fa-italic"></i> Italic</button>
                        <button id="bold-text" class="btn"><i class="fas fa-bold"></i> Bold</button>
                        <button id="delete-button" class="btn"><i class="fas fa-trash"></i> Delete</button>
                        <button id="undo-button" class="btn"><i class="fas fa-undo"></i> Undo</button>
                        <button id="redo-button" class="btn"><i class="fas fa-redo"></i> Redo</button>
                        <button id="redirect-button" class="btn"><i class="fas fa-refresh"></i> Reset All</button>

                        <div class="text-effects">
                            {{-- <div class="form-check">
                                <input type="checkbox" id="text-curve" class="form-check-input">
                                <label for="text-curve" class="form-check-label">Curve</label>
                            </div> --}}
                            <div class="form-check">
                                <input type="checkbox" id="text-outline" class="form-check-input">
                                <label for="text-outline" class="form-check-label">Outline</label>
                            </div>
                            <div class="form-check">
                                <input type="checkbox" id="text-shadow" class="form-check-input">
                                <label for="text-shadow" class="form-check-label">Shadow</label>
                            </div>
                        </div>

                        <div class="form-group colorPickerContainer">
                            <label for="text-color">Text Color</label>
                            <input type="color" id="text-color" class="form-control colorPicker">
                            <label for="background-color">Bg Color</label>
                            <input type="color" id="background-color" class="form-control colorPicker">
                        </div>

                        <div class="form-group">
                            <label for="font-family" class="font-label">Font Family</label>
                            <select id="font-family" class="form-control">
                                <!-- Add your font options here -->
                                <option value="Roboto" style="font-family: 'Roboto';">Roboto</option>
                                <option value="Open Sans" style="font-family: 'Open Sans';">Open Sans</option>
                                <option value="Lato" style="font-family: 'Lato';">Lato</option>
                                <option value="Montserrat" style="font-family: 'Montserrat';">Montserrat</option>
                                <option value="Poppins" style="font-family: 'Poppins';">Poppins</option>
                                <option value="Arial" style="font-family: Arial;">Arial</option>
                                <option value="Verdana" style="font-family: Verdana;">Verdana</option>
                                <option value="Courier New" style="font-family: Courier New;">Courier New</option>
                                <option value="Georgia" style="font-family: Georgia;">Georgia</option>
                                <option value="Times New Roman" style="font-family: Times New Roman;">Times New Roman
                                </option>
                                <option value="Trebuchet MS" style="font-family: Trebuchet MS;">Trebuchet MS</option>
                                <option value="Comic Sans MS" style="font-family: Comic Sans MS;">Comic Sans MS</option>
                                <option value="Tahoma" style="font-family: Tahoma;">Tahoma</option>
                                <option value="Impact" style="font-family: Impact;">Impact</option>
                                <option value="Arial Black" style="font-family: Arial Black;">Arial Black</option>
                                <option value="Lucida Console" style="font-family: Lucida Console;">Lucida Console</option>
                                <option value="Lucida Sans Unicode" style="font-family: Lucida Sans Unicode;">Lucida Sans
                                    Unicode</option>
                                <option value="Consolas" style="font-family: Consolas;">Consolas</option>
                                <option value="Palatino Linotype" style="font-family: Palatino Linotype;">Palatino Linotype
                                </option>
                                <option value="Garamond" style="font-family: Garamond;">Garamond</option>
                                <option value="MS Serif" style="font-family: MS Serif;">MS Serif</option>
                                <option value="MS Sans Serif" style="font-family: MS Sans Serif;">MS Sans Serif</option>
                                <option value="Bookman Old Style" style="font-family: Bookman Old Style;">Bookman Old Style
                                </option>
                                <option value="Arial Narrow" style="font-family: Arial Narrow;">Arial Narrow</option>
                                <option value="Century Gothic" style="font-family: Century Gothic;">Century Gothic</option>
                                <option value="Frank Ruhl Libre" style="font-family: Frank Ruhl Libre;">Frank Ruhl Libre
                                </option>
                                <option value="Droid Sans" style="font-family: Droid Sans;">Droid Sans</option>
                                <option value="Bebas Neue" style="font-family: Bebas Neue;">Bebas Neue</option>
                                <option value="Playfair Display" style="font-family: Playfair Display;">Playfair Display
                                </option>
                                <option value="Poppins" style="font-family: 'Poppins';">Poppins</option>
                                <option value="Montserrat" style="font-family: 'Montserrat';">Montserrat</option>
                                <option value="Lora" style="font-family: Lora;">Lora</option>
                                <option value="Merriweather" style="font-family: Merriweather;">Merriweather</option>
                                <option value="Raleway" style="font-family: Raleway;">Raleway</option>
                                <option value="Quicksand" style="font-family: Quicksand;">Quicksand</option>
                                <option value="PT Sans" style="font-family: PT Sans;">PT Sans</option>
                                <option value="Ubuntu" style="font-family: Ubuntu;">Ubuntu</option>
                                <option value="Fira Sans" style="font-family: Fira Sans;">Fira Sans</option>
                                <option value="Nunito" style="font-family: Nunito;">Nunito</option>
                                <option value="Source Sans Pro" style="font-family: Source Sans Pro;">Source Sans Pro
                                </option>
                                <option value="Open Sans" style="font-family: 'Open Sans';">Open Sans</option>
                                <option value="Lato" style="font-family: 'Lato';">Lato</option>
                                <option value="Exo 2" style="font-family: 'Exo 2';">Exo 2</option>
                            </select>

                            <button id="add-text" class="btn"><i class="fas fa-plus"></i> Add Text</button>
                            <input type="text" id="logo-text" class="form-control">
                            <div id="color-palettes" class="mt-3"></div>
                            {{-- @guest
                                <a href="{{ route('login') }}" class="btn mt-5"><i class="fas fa-save"></i> Download</a>
                            @else
                            @endguest --}}
                            @if ($hasOrder)
                                <button id="download-logo" class="btn mt-5"><i class="fa fa-download"></i> Download</button>
                            @else
                                <a href="javascript:void(0)" class="btn mt-5 redirect-to-pckgs-btn"><i
                                        class="fa fa-download"></i> Download</a>
                            @endif
                            <a href="javascript:void(0)" class="btn save-logo"><i class="fas fa-save"></i> Save</a>
                        </div>
                    </div>





                </div>
            </div>

            <div class="col-md-8">
                <div class="container-custom">

                    <div class="col-md-8">
                        <h1 class="text-center" style="margin-top: 20px;">RFS Logo Editor</h1>
                        <canvas id="logo-canvas" style="width: 100%; border: 1px solid;"></canvas>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.3/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <script>
        document.getElementById('redirect-button').addEventListener('click', function() {
            window.location.href = "{{ url('/maker') }}";
        });
    </script>

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.5.0/fabric.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/fabric-history@2.0.0/src/index.min.js"></script>

    <script>
        var company = @json(session('company', []));
        var image = @json(session('image', []));
    </script>

    <script src="{{ asset('js/script.js') }}"></script>
    <script>
        $(function() {
            $('.redirect-to-pckgs-btn').click(function() {
                let dataURL = canvas.toDataURL({
                    format: 'png',
                    quality: 1
                });
                sessionStorage.setItem('logoDataUrl', dataURL)
                location.assign("{{ route('packages') }}")
            })

            $('#download-logo').click(function() {
                @auth
                    let dataURL = canvas.toDataURL({
                        format: 'png',
                        quality: 1
                    });
                    fetch("{{ route('saveLogo') }}", {
                        method: 'POST',
                        headers: {
                            'X-CSRF-TOKEN': "{{ csrf_token() }}",
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            userId: {{ auth()->id() }},
                            productId: {{ session()->get('product-id') }},
                            logoString: dataURL,
                        })
                    })
                    // $.ajax({
                    //     url: "{{ route('saveLogo') }}",
                    //     method: 'POST',
                    //     headers: {
                    //         'X-CSRF-TOKEN': "{{ csrf_token() }}",
                    //     },
                    //     data: {
                    //         userId: {{ auth()->id() }},
                    //         productId: {{ session()->get('product-id') }},
                    //         logoString: dataURL,
                    //     },
                    // })
                @endauth
            })
        })
    </script>
    <!----------------------------------------- footer ------------------------------->


    <!-----------------------------------------End footer ------------------------------->


@endsection
