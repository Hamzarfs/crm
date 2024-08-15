@extends('site.common')

@section('title', 'Welcome')

@section('content')
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.css" rel="stylesheet">

<style>
    .logo-gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .logo-item {
        width: 48%;
        margin-bottom: 20px;
        position: relative;
        height: 300px;
        overflow: hidden;
    }
    /* .logo-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center;
    } */
    .select-btn {
        display: none;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 10;
    }
    .logo-item:hover .select-btn {
        display: block;
    }
    .filter-buttons button.active {
        background-color: #0d6efd;
        color: white;
    }
</style>

<div class="container">
    <!-- Heading -->
    <div class="row mt-5">
        <div class="col text-center">
            <h1>Create Free{{ ucfirst($category) }} Logos Instantly</h1>
           
        </div>
    </div>

    <!-- Input Fields and Update Button -->
    <form id="loogForm" method="POST" action="{{ url('/store-session-data-logo') }}">
        @csrf
        <div class="row my-4">
            <div class="col-md-4">
                <input type="hidden" name="category" value="{{ $categoryObj->id }}" >
                <input type="text" class="form-control" id="company" name="company" placeholder="Brand Name" value="{{ session('company') }}">
            </div>
            
            <div class="col-md-4">
                <button class="btn btn-primary w-100" id="updateButton">Get a Logo</button>
            </div>
        </div>
    </form>

    <!-- Gallery -->
    <div class="row logo-gallery">

            @foreach ($products as $product)
                <div class="col-md-6 logo-item" data-category="{{ $product->category_id }}">
                    <div class="card-container">
                        <img src="{{ '/category-image/'.$product->image;}}" class="img-fluid portfolio-image" alt="{{ $product->name }}">
                        <div class="text-placeholder">{{ session('company') }} </div>
                        <a href="{{ url('/store-session-data-image?image='.$product->image) }}" class="hover-button select-btn" data-product-id="{{ $product->id }}">Select </a>
                    </div>
                </div>
            @endforeach
    </div>
    <div>    
        {{$categoryObj->content}}
    </div>    

     <!-- Pagination Links -->
     {{ $products->links() }}
</div>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
<script>
$(document).ready(function() {
    var categories = @json($categories); // Convert PHP categories array to JavaScript

    // Extract the category names and ids for the autocomplete
    var availableTags = categories.map(function(category) {
        return {
            label: category.name,
            value: category.id
        };
    });

    // Initialize the autocomplete widget
    $('#industry').autocomplete({
        source: availableTags,
        select: function(event, ui) {
            $('#industry').val(ui.item.label);
            $('#industryId').val(ui.item.value); // Store the selected category ID
            return false;
        }
    });

    // Check if there's a session value for category and set the corresponding name
    var sessionCategoryId = $('#industryId').val();
    if (sessionCategoryId) {
        var selectedCategory = availableTags.find(function(tag) {
            return tag.value == sessionCategoryId;
        });
        if (selectedCategory) {
            $('#industry').val(selectedCategory.label);
        }
    }

    // Form validation
    $('#loogForm').on('submit', function(e) {
        var isValid = true;
        var company = $('#company').val().trim();
          if (!company) {
            isValid = false;
            alert('Please enter the brand name.');
        }
 

        if (!isValid) {
            e.preventDefault(); // Prevent form submission if validation fails
        }
    });

    
});
</script>
@endsection
