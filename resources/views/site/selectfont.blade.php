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

   </style>
    <!----------------------------------------- Banner Section ------------------------------->
    <form id="fontForm" method="POST" action="{{ url('/store-session-data') }}">
        @csrf
        
        <input type="hidden" name="font" id="selectedFont"> <!-- Hidden field for the selected font -->

    <div class="main-section">
        <div class="container">
            <h1 class="mt-5">Select a font styles you like</h1>
            <p>Font choices define the look and feel of your logo</p>
            {{ session('company') }}
            {{ session('colors') }}
            <div class="row mt-3">
                <div class="col-md-4">
                    <div class="font-item" data-font="Montserrat">
                        <span class="font-sample" style="font-family: 'Montserrat';">Montserrat</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="font-item" data-font="Moon Dance">
                        <span class="font-sample" style="font-family: 'Moon Dance';">Moon Dance</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="font-item" data-font="New Rocker">
                        <span class="font-sample" style="font-family: 'New Rocker';">New Rocker</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="font-item" data-font="Pacifico">
                        <span class="font-sample" style="font-family: 'Pacifico';">Pacifico</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="font-item" data-font="Sancreek">
                        <span class="font-sample" style="font-family: 'Sancreek';">Sancreek</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="font-item" data-font="Notable">
                        <span class="font-sample" style="font-family: 'Notable';">Notable</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="font-item" data-font="Yesteryear">
                        <span class="font-sample" style="font-family: 'Yesteryear';">Yesteryear</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="font-item" data-font="Zilla Slab">
                        <span class="font-sample" style="font-family: 'Zilla Slab';">Zilla Slab</span>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="font-item" data-font="Vidaloka">
                        <span class="font-sample" style="font-family: 'Vidaloka';">Vidaloka</span>
                    </div>
                </div>
            </div>
            <div id="text-section" class="p-3 border">
                <p>This is the text whose font will change based on your selection.</p>
            </div>
        </div>
    </div>
    </form>
        <!----------------------------------------- footer ------------------------------->

    <footer class="container">
        <div class="button-container">
            <button class="btn-back" id="backButton">
            <a href="http://127.0.0.1:8000/color">
            <a href="{{ url('/select-color') }}"> <button class="btn btn-secondary mx-2">Back</button></a>
           </button>
            <button class="btn btn-secondary btn-skip" id="nextButton" disabled>Next</button>
        </div>
    </footer>

        <!-----------------------------------------End footer ------------------------------->


    <!-- Bootstrap JS and dependencies -->
     
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

    <script>
    document.querySelectorAll('.font-item').forEach(function(item) {
        item.addEventListener('click', function() {
            var selectedFont = this.getAttribute('data-font');
            document.getElementById('nextButton').style.backgroundColor = '#5540d9';
            document.getElementById('nextButton').disabled = false;
            // Remove 'selected' class from all font items
            document.querySelectorAll('.font-item').forEach(function(item) {
                item.classList.remove('selected');
            });
            // Add 'selected' class to the clicked font item
            this.classList.add('selected');
        });
    });

    // document.getElementById('nextButton').addEventListener('click', function() {
    //     var selectedFont = document.querySelector('.font-item.selected').getAttribute('data-font');
    //     const urlParams = new URLSearchParams(window.location.search);
     
    //     const nextUrl = `next-page.html?font=${encodeURIComponent(selectedFont)}`;
    //     window.location.href = nextUrl;
    // });

    document.getElementById('nextButton').addEventListener('click', function(event) {
            event.preventDefault();

            // Get the selected font
            var selectedFont = document.querySelector('.font-item.selected')?.getAttribute('data-font');

            if (selectedFont) {
                // Create a hidden input field for the selected font
                document.getElementById('selectedFont').value = selectedFont;

                // Submit the form to the storeSessionData route
                document.getElementById('fontForm').submit();
            } else {
                alert("Please select a font.");
            }
        });

    document.getElementById('backButton').addEventListener('click', function() {
        window.history.back();
    });
    </script>

@endsection
