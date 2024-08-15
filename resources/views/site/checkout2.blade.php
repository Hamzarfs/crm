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


    .logo-canvas-container {
    display: flex;
    justify-content: center; /* Center horizontally */
    align-items: center; /* Center vertically */
    height: 100%; /* Ensure it takes full height of its parent */
    margin: 0 auto; /* Center horizontally */
}

</style>

<div class="container">
    <!-- Heading -->
    <div class="row mt-5">
        <div class="col text-center">
            <h1>Logo Preview</h1>
            
        </div>
    </div>


    <div class="row my-8">
    
    <div class="logo-canvas-container">
        <canvas id="logo-canvas" width="505" height="440"></canvas>
    </div>

    </div>
    <br><br>
    <!-- Input Fields and Update Button -->
    
        
        <div class="row my-8">
        <div class="col-md-2"></div>
            b
            <div class="col-md-2"></div>
        </div>
     

    <!-- Gallery -->
    <div class="row logo-gallery">

           
    </div>
    
</div>

 
    
@endsection
