<x-admin>
    @section('title', 'Employees')

    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card">
                <div class="card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Import Employees</h3>
                        <div class="card-tools">
                            <a href="{{ route('admin.employee.index') }}" class="btn btn-info btn-sm">Back</a>
                        </div>
                    </div>

                    <form action="{{ route('admin.employee.import') }}" method="post" enctype="multipart/form-data">
                        @csrf
                        <div class="card-body">
                            <div class="form-group">
                                <label for="file" class="form-label">Upload sheet in .xlsx or .xls format</label>
                                <div class="custom-file">
                                    <input type="file" class="custom-file-input @error('file') is-invalid @enderror"
                                        id="file" name="file" accept=".xlsx,.xls">
                                    <label class="custom-file-label" for="file">Choose file</label>
                                    @error('file')
                                        <div class="invalid-feedback">
                                            {{ $message }}
                                        </div>
                                    @enderror
                                </div>
                                <a href="{{ route('admin.employee.sample') }}">Download sample sheet</a>
                            </div>

                            @if ($errors = session()->get('customErrors'))
                                <div class="text-danger">
                                    <h3>Errors:</h3>
                                    <ul>
                                        @foreach ($errors as $error)
                                            <li>{{ $error }}</li>
                                        @endforeach
                                    </ul>
                                </div>
                            @endif
                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary">Import</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</x-admin>
