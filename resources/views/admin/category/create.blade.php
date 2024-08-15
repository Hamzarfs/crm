<x-admin>
    @section('title','Create Category')
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Create Category</h3>
                        <div class="card-tools">
                            <a href="{{ route('admin.category.index') }}" class="btn btn-info btn-sm">Back</a>
                        </div>
                    </div>
                    <form class="needs-validation" novalidate action="{{ route('admin.category.store') }}" method="POST">
                        @csrf
                        <div class="card-body">
                            <div class="form-group">
                                <label for="name">Category Name</label>
                                <input type="text" class="form-control" id="name" name="name"
                                    placeholder="Enter category name" required value="{{ old('name') }}">

                            </div>
                            <x-error>name</x-error>
                            <div class="form-group">
                                <label for="name">Meta Title</label>
                                <input type="text" class="form-control" id="meta_title" name="meta_title"
                                    placeholder="Enter meta title" required value="{{ old('meta_title') }}">
                                    
                            </div>
                            <div class="form-group">
                                <label for="name">Meta Description</label>
                                <input type="text" class="form-control" id="meta_desc" name="meta_desc"
                                    placeholder="Enter category description" required value="{{ old('meta_desc') }}">
                                    
                            </div>
                            <div class="form-group">
                                <label for="content">Content</label>
                                <textarea class="form-control" id="content" name="content" placeholder="Enter content" required>{{ old('content') }}</textarea>
                            </div>
                            <div class="form-group form-check">
                                         <input type="hidden" name="is_top" value="0">
                                        <input type="checkbox" class="form-check-input" id="is_top" name="is_top" value="1" {{ old('is_top') == 1 ? 'checked' : '' }}>
                                        <label class="form-check-label" for="is_top">Is Top Category</label>
                            </div>

                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary float-right">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-admin>
