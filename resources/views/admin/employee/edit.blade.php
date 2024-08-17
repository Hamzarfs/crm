<x-admin>
    @section('title', 'Update Employee')

    @section('css')
        <style></style>
    @endsection

    <div class="row justify-content-center">
        <div class="col-md-10">
            <div class="card">
                <div class="card-primary">
                    <div class="card-header">
                        <div class="card-tools">
                            <a href="{{ route('admin.employee.index') }}" class="btn btn-info btn-sm">Back</a>
                        </div>
                    </div>

                    <form action="{{ route('admin.employee.update', $employee->id) }}" method="POST"
                        enctype="multipart/form-data">
                        @csrf
                        @method('PUT')
                        <div class="card-body">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <label for="name" class="form-label">Name</label>
                                        <input type="text" name="name" id="name"
                                            value="{{ old('name') ?? $employee->name }}"
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
                                        <input type="email" name="email" id="email"
                                            value="{{ old('email') ?? $employee->email }}"
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
                                        <input type="tel" name="phone" id="phone"
                                            value="{{ old('phone') ?? $employee->phonenumber }}"
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
                                            @error('picture')
                                                <div class="invalid-feedback">
                                                    {{ $message }}
                                                </div>
                                            @enderror
                                        </div>
                                        @if ($employee->avatar)
                                            <a href="javascript:void(0)" data-toggle="modal"
                                                data-target="#imageModal">View
                                                Image</a>
                                        @endif
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="card-footer">
                            <button type="submit" id="submit" class="btn btn-primary float-righta">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    @if ($employee->avatar)
        {{-- View image modal --}}
        <div class="modal fade" id="imageModal">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">View Image</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img src="{{ asset($employee->avatar) }}" alt="" class="d-block m-auto img-fluid">
                    </div>
                    <div class="modal-footer">
                        <span class="text-muted">If you want to change image just add new image otherwise leave
                            it.</span>
                    </div>
                </div>
            </div>
        </div>
    @endif


    @section('js')
        <script></script>
    @endsection
</x-admin>
