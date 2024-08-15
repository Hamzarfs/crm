<x-admin>
    @section('title', 'Create Employee')
    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="card-primary">
                    <div class="card-header">
                        <div class="card-tools">
                            <a href="{{ route('admin.employee.index') }}" class="btn btn-info btn-sm">Back</a>
                        </div>
                    </div>

                    <form action="{{ route('admin.employee.store') }}" method="POST"
                        enctype="multipart/form-data">
                        @csrf
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" name="name" id="name" value="{{ old('name') }}"
                                            class="form-control @error('name') is-invalid @enderror" required>
                                        @error('name')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="email" class="form-label">Email</label>
                                        <input type="email" name="email" id="email" value="{{ old('email') }}"
                                            class="form-control @error('email') is-invalid @enderror" required>
                                        @error('email')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="phone" class="form-label">Phone</label>
                                        <input type="tel" name="phone" id="phone" value="{{ old('phone') }}"
                                            class="form-control @error('phone') is-invalid @enderror" required>
                                        @error('phone')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>

                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="picture" class="form-label">Picture</label>
                                        <div class="custom-file">
                                            <input type="file"
                                                class="custom-file-input @error('picture') is-invalid @enderror"
                                                id="picture" name="picture" accept=".jpeg,.jpg,.png">
                                            <label class="custom-file-label" for="picture">Choose file</label>
                                        </div>
                                        @error('picture')
                                            <div class="invalid-feedback">
                                                {{ $message }}
                                            </div>
                                        @enderror
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="card-footer">
                            <button type="submit" id="submit" class="btn btn-primary float-righta">Save</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    @section('js')
        <script>

        </script>
    @endsection
</x-admin>