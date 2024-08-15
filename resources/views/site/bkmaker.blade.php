<!-- resources/views/site/main.blade.php -->
@extends('site.common')

@section('title', 'Welcome')

@section('content')

<style>
body {
    font-family: Arial, sans-serif;
}

.main-section {
    background-color: #E9EDFF;
    padding: 20px;
    margin-bottom: 20px;
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
    transition: box-shadow 0.9s ease; /* Smooth transition for box-shadow */
}

.font-item:hover {
    box-shadow: 0 4px 8px rgba(46, 46, 46, 0.1); /* Box shadow on hover */
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

@font-face {
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
        }

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
       /* Container for color pickers to ensure they stay in one row or adjust to space */
.colorPickerContainer {
    display: flex;         /* Align color pickers in a row */
    flex-wrap: wrap;       /* Allow wrapping if there's not enough space */
    gap: 10px;            /* Space between color pickers */
}

/* Individual color picker style */
.colorPicker {
    width: 50px;         /* Set a fixed width for each color picker */
    height: 40px;        /* Set a fixed height for color pickers (adjust as needed) */
}
   </style>
    <!----------------------------------------- Banner Section ------------------------------->

    <div class="container mt-5">
        <h1 class="text-center">Logo Editor</h1>
        <div class="row mt-4">
            <div class="col-md-2">
                <div id="color-palettes" class="mt-3"></div>
            </div>
            
            <div class="col-md-8">
                <input type="file" id="upload-logo" accept=".svg, image/svg+xml" class="form-control mb-3">
                <canvas id="logo-canvas"  style="width: 100%; border: 1px solid;"></canvas>
                <button id="delete-logo" class="btn btn-danger mt-3">Delete Logo</button>
            </div>
            <div class="col-md-2">
                <div class="form-group">
                    <label for="logo-text">Text</label>
                    <input type="text" id="logo-text" class="form-control">
                </div>
                <div class="form-group">
                    <label for="font-family">Font Family</label>
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
                        <option value="Times New Roman" style="font-family: Times New Roman;">Times New Roman</option>
                        <option value="Trebuchet MS" style="font-family: Trebuchet MS;">Trebuchet MS</option>
                        <option value="Comic Sans MS" style="font-family: Comic Sans MS;">Comic Sans MS</option>
                        <option value="Tahoma" style="font-family: Tahoma;">Tahoma</option>
                        <option value="Impact" style="font-family: Impact;">Impact</option>
                        <option value="Arial Black" style="font-family: Arial Black;">Arial Black</option>
                        <option value="Lucida Console" style="font-family: Lucida Console;">Lucida Console</option>
                        <option value="Lucida Sans Unicode" style="font-family: Lucida Sans Unicode;">Lucida Sans Unicode</option>
                        <option value="Consolas" style="font-family: Consolas;">Consolas</option>
                        <option value="Palatino Linotype" style="font-family: Palatino Linotype;">Palatino Linotype</option>
                        <option value="Garamond" style="font-family: Garamond;">Garamond</option>
                        <option value="MS Serif" style="font-family: MS Serif;">MS Serif</option>
                        <option value="MS Sans Serif" style="font-family: MS Sans Serif;">MS Sans Serif</option>
                        <option value="Bookman Old Style" style="font-family: Bookman Old Style;">Bookman Old Style</option>
                        <option value="Arial Narrow" style="font-family: Arial Narrow;">Arial Narrow</option>
                        <option value="Century Gothic" style="font-family: Century Gothic;">Century Gothic</option>
                        <option value="Frank Ruhl Libre" style="font-family: Frank Ruhl Libre;">Frank Ruhl Libre</option>
                        <option value="Droid Sans" style="font-family: Droid Sans;">Droid Sans</option>
                        <option value="Bebas Neue" style="font-family: Bebas Neue;">Bebas Neue</option>
                        <option value="Playfair Display" style="font-family: Playfair Display;">Playfair Display</option>
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
                        <option value="Source Sans Pro" style="font-family: Source Sans Pro;">Source Sans Pro</option>
                        <option value="Open Sans" style="font-family: 'Open Sans';">Open Sans</option>
                        <option value="Lato" style="font-family: 'Lato';">Lato</option>
                        <option value="Exo 2" style="font-family: 'Exo 2';">Exo 2</option>
                    </select>
                </div>
                

                 


                <button  id="italic-text" class="btn btn-primary">Italic</button>
                <button id="bold-text" class="btn btn-success">Bold</button>
                <!-- <button id="small-text" class="btn btn-secondary">Aa</button> -->

                <div class="text-effects mt-3">
                    <!-- <div class="form-check">
                        <input type="checkbox" id="text-curve" class="form-check-input">
                        <label for="text-curve" class="form-check-label">Curve</label>
                    </div> -->
                    <div class="form-check">
                        <input type="checkbox" id="text-outline" class="form-check-input">
                        <label for="text-outline" class="form-check-label">Outline</label>
                    </div>
                    <div class="form-check">
                        <input type="checkbox" id="text-shadow" class="form-check-input">
                        <label for="text-shadow" class="form-check-label">Shadow</label>
                    </div>
                </div>
                 
                
                <div class="form-group mt-3 colorPickerContainer">
                    <label for="text-color">Text Color</label>
                    <input type="color" id="text-color" class="form-control colorPicker">
                    <label for="background-color">Bg Color &nbsp;&nbsp;</label>
                    <input type="color" id="background-color" class="form-control colorPicker">
                </div>
                
                
                

                <button id="add-text" class="btn btn-primary">Add Text</button>
                <button id="save-logo" class="btn btn-success">Save </button>
               
            </div>
        </div>
    </div>
    

    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/fabric.js/4.5.0/fabric.min.js"></script>
    <script>
         var company = @json(session('company', []));
         var image = @json(session('image', []));
         
    </script>
    <script src="{{ asset('js/script.js') }}"></script>
        <!----------------------------------------- footer ------------------------------->
 

        <!-----------------------------------------End footer ------------------------------->

 

@endsection
