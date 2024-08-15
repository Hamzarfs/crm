<!-- resources/views/site/main.blade.php -->
@extends('site.common')

@section('title', 'Welcome')

@section('content')
<style>
.color-box {
    cursor: pointer;
    border: 2px solid transparent; /* Default transparent border */
}
.color-box:hover {
    border: 2px solid #000; /* Black border on hover */
}
.color-box.selected {
    border: 2px solid #000; /* Black border on selection */
}
body {
    font-family: Arial, sans-serif;
}
.color-box {
    border: 1px solid #ccc;
    text-align: center;
    background-color: #fff;
    padding: 0px;
    border-radius: 20px;
}
.color {
    height: auto;
    padding-top: 100%;
    border-radius: 5px;
    /* position: relative; */
}
.color::after {
    content: "";
    display: block;
    /* padding-bottom: 10%; */
}
.color-name {
    font-weight: bold;
    margin-top: 10px;
}
.btn {
    padding: 10px 20px;
}
.color-box:hover {
    border: 3px solid black;
}
.custom-button-online {
      padding: 10px;
      border-radius: 5px;
      color: #fff;
      background-color:#646BD9;
      font-size: 15px;
      font-weight: 700;
      line-height: 24px;
      text-align: center;
      border-color: #646BD9;
      margin-bottom: 60px;
    }
   </style>



<div class="container mt-4">
        <!-- Row 1: Heading -->
        <div class="row mb-4 text-center">
            <div class="col">
                {{ session('company') }}

                <h1>Choose colors you want to see in car</h1>
                <p>Colors help express your brand message</p>
            </div>
        </div>


        <form id="colorForm" method="POST" action="{{ url('/store-session-data') }}">
    @csrf

         <input type="hidden" name="colors" id="selectedColors"> <!-- Hidden field for the selected colors -->
        <!-- Row 2: Color Selection -->
        <div class="row ">
            <!-- Column 1: Red -->
            <div class="col-md-4 mb-4">
                <div class="color-box p-2">
                    <div class="row g-1 mb-2">
                        <div class="col-3"><div class="color" style="background-color: #E50000;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #F50B0B;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #FE1A00;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #FD3400;"></div></div>
                    </div>
                    <div class="row g-1 mb-2">
                        <div class="col-3"><div class="color" style="background-color: #FD4100;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #FC5B00;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #FB7500;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #FA8F00;"></div></div>
                    </div>
                    <div class="color-name">Red</div>
                </div>
            </div>
            <!-- Column 2: Purple -->
            <div class="col-md-4 mb-4">
                <div class="color-box p-2">
                    <div class="row g-1 mb-2">
                        <div class="col-3"><div class="color" style="background-color: #630263;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #7D026A;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #8A016E;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #A40176;"></div></div>
                    </div>
                    <div class="row g-1 mb-2">
                        <div class="col-3"><div class="color" style="background-color: #BD017D;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #D70085;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #E40088;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #F1008C;"></div></div>
                    </div>
                    <div class="color-name">Purple</div>
                </div>
            </div>
            <!-- Column 3: Blue -->
            <div class="col-md-4 mb-4">
                <div class="color-box p-2">
                    <div class="row g-1 mb-2">
                        <div class="col-3"><div class="color" style="background-color: #00388F;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #005AA3;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #006BAE;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #007CB8;"></div></div>
                    </div>
                    <div class="row g-1 mb-2">
                        <div class="col-3"><div class="color" style="background-color: #009ECC;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #00AFD6;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #00D1EB;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #00F3FF;"></div></div>
                    </div>
                    <div class="color-name">Blue</div>
                </div>
            </div>
        </div>

        <!-- Additional Rows for more colors -->
        <!-- Row 3 -->
        <div class="row">
            <!-- Column 1: Black -->
            <div class="col-md-4 mb-4">
                <div class="color-box p-2">
                    <div class="row g-1 mb-2">
                        <div class="col-3"><div class="color" style="background-color: #000000;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #1C1C1C;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #333333;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #4D4D4D;"></div></div>
                    </div>
                    <div class="row g-1 mb-2">
                        <div class="col-3"><div class="color" style="background-color: #666666;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #808080;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #999999;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #B3B3B3;"></div></div>
                    </div>
                    <div class="color-name">Black</div>
                </div>
            </div>
            <!-- Column 2: Yellow -->
            <div class="col-md-4 mb-4">
                <div class="color-box p-2">
                    <div class="row g-1 mb-2">
                        <div class="col-3"><div class="color" style="background-color: #FCC807;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #FDE102;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #FEEC52;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #FEF17B;"></div></div>
                    </div>
                    <div class="row g-1 mb-2">
                        <div class="col-3"><div class="color" style="background-color: #FEF17B;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #FEF6A3;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #FFF9B7;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #FFFEDF;"></div></div>
                    </div>
                    <div class="color-name">Yellow</div>
                </div>
            </div>
            <!-- Column 3: Teal -->
            <div class="col-md-4 mb-4">
                <div class="color-box p-2">
                    <div class="row g-1 mb-2">
                        <div class="col-3"><div class="color" style="background-color: #008080;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #299595;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #51A9A9;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #66B4B3;"></div></div>
                    </div>
                    <div class="row g-1 mb-2">
                        <div class="col-3"><div class="color" style="background-color: #8FC9C8;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #B7DDDC;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #CCE8E7;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #E0F2F1;"></div></div>
                    </div>
                    <div class="color-name">Teal</div>
                </div>
            </div>
        </div>

        <!-- Row 4 -->
        <div class="row mb-4">
            <!-- Column 1: Green -->
            <div class="col-md-4 mb-4">
                <div class="color-box p-2">
                    <div class="row g-1 mb-2">
                        <div class="col-3"><div class="color" style="background-color: #006131;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #007339;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #1B7F3B;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #36963D;"></div></div>
                    </div>
                    <div class="row g-1 mb-2">
                        <div class="col-3"><div class="color" style="background-color: #43A13E;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #5EB841;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #79CF43;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #94E646;"></div></div>
                    </div>
                    <div class="color-name">Green</div>
                </div>
            </div>
            <!-- Column 2: Brown -->
            <div class="col-md-4 mb-4">
                <div class="color-box p-2">
                    <div class="row g-1 mb-2">
                        <div class="col-3"><div class="color" style="background-color: #603813;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #6D4723;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #795633;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #937453;"></div></div>
                    </div>
                    <div class="row g-1 mb-2">
                        <div class="col-3"><div class="color" style="background-color: #A08363;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #AC9172;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #D3BEA2;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #ECDCC2;"></div></div>
                    </div>
                    <div class="color-name">Brown</div>
                </div>
            </div>
            <!-- Column 3: Pastels -->
            <div class="col-md-4 mb-4">
                <div class="color-box p-2">
                    <div class="row g-1 mb-2">
                        <div class="col-3"><div class="color" style="background-color: #F2CDC4;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #ECDCC2;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #D78F9D;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #F3BD7D;"></div></div>
                    </div>
                    <div class="row g-1 mb-2">
                        <div class="col-3"><div class="color" style="background-color: #406695;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #84DFFE;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #B9D1C3;"></div></div>
                        <div class="col-3"><div class="color" style="background-color: #92B7D4;"></div></div>
                    </div>
                    <div class="color-name">Pastels</div>
                </div>
            </div>
        </div>
</form>
        <!-- Row 5: Footer -->
        <div class="row">
            <div class="col text-center">
                <a href="{{ url('/') }}"> <button class="btn btn-secondary mx-2">Back</button></a>
         
               <a href="#"> <button class="custom-button-online">Next</button></a>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
<script>



$(document).ready(function() {
    // Disable the Next button initially
    $('.custom-button-online').prop('disabled', true).css('background-color', 'grey');

    let selectedColors = 0;
    const selectedColorNames = [];

    // Handle color group selection
    $('.color-box').on('click', function() {
        const colorName = $(this).find('.color-name').text();

        // If the color group is not already selected
        if (!$(this).hasClass('selected')) {
            // If the maximum limit of 3 is reached, show an alert and return
            if (selectedColors >= 3) {
                alert("You can select a maximum of 3 colors.");
                return;
            }
            // Mark the color group as selected
            $(this).addClass('selected');
            selectedColors++;
            selectedColorNames.push(colorName);
        } else {
            // Unselect the color group
            $(this).removeClass('selected');
            selectedColors--;
            const index = selectedColorNames.indexOf(colorName);
            if (index > -1) {
                selectedColorNames.splice(index, 1);
            }
        }

        // Update the Next button state
        if (selectedColors > 0) {
            $('.custom-button-online').prop('disabled', false).css('background-color', '');
        } else {
            $('.custom-button-online').prop('disabled', true).css('background-color', 'grey');
        }
    });

    // Handle Next button click
    // $('.custom-button-online').on('click', function(event) {
    //     event.preventDefault();
    //     if (selectedColors > 0) {
    //         const queryString = selectedColorNames.join(',');
    //         const nextUrl = `/font?colors=${queryString}`;
    //         window.location.href = nextUrl;
    //     }
    // });

    $('.custom-button-online').on('click', function(event) {
        //alert("AAAAAAAAAAAAAAAAAAAAA"+selectedColorNames);
        event.preventDefault();
        if (selectedColors > 0) {
            // Update the hidden input field with the selected colors
            $('#selectedColors').val(selectedColorNames.join(','));

            // Submit the form to the storeSessionData route
            $('#colorForm').submit();
        } else {
            alert("Please select at least one color.");
        }
    });
});




    </script>

    

@endsection
