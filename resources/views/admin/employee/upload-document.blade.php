<x-admin>
    @section('title', 'Employees')

    @php
        $isRequired = $employee->documents->isEmpty();
    @endphp

    <div class="row justify-content-center">
        <div class="col-9">
            <div class="card">
                <div class="card-primary">
                    <div class="card-header">
                        <h3 class="card-title">Upload employee documents</h3>
                        <div class="card-tools">
                            <a href="{{ route('admin.employee.index') }}" class="btn btn-info btn-sm">Back</a>
                        </div>
                    </div>

                    <div class="card-body">
                        <form action="{{ route('admin.employee.uploadDocuments', $employee->id) }}" method="post"
                            enctype="multipart/form-data">
                            @csrf
                            <input type="hidden" name="isRequired" value="{{ $isRequired }}">
                            <div class="row">
                                <div class="col-4">
                                    <div class="form-group">
                                        <label for="proof">Proof of Employment</label>
                                        <div class="custom-file">
                                            <input type="file"
                                                class="custom-file-input @error('proof') is-invalid @enderror"
                                                name="proof[]" id="proof" multiple>
                                            <label class="custom-file-label" for="proof">Choose file</label>
                                            @error('proof')
                                                <div class="invalid-feedback">
                                                    {{ $message }}
                                                </div>
                                            @enderror
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label for="cnic">CNIC</label>
                                        @if ($isRequired)
                                            <b class="text-danger">*</b>
                                        @endif
                                        <div class="custom-file">
                                            <input type="file"
                                                class="custom-file-input @error('cnic') is-invalid @enderror"
                                                name="cnic[]" id="cnic" multiple @required($isRequired)>
                                            <label class="custom-file-label" for="cnic">Choose file</label>
                                            @error('cnic')
                                                <div class="invalid-feedback">
                                                    {{ $message }}
                                                </div>
                                            @enderror
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="form-group">
                                        <label for="pic">Photograph</label>
                                        @if ($isRequired)
                                            <b class="text-danger">*</b>
                                        @endif
                                        <div class="custom-file">
                                            <input type="file"
                                                class="custom-file-input @error('pic') is-invalid @enderror"
                                                name="pic[]" id="pic" multiple @required($isRequired)>
                                            <label class="custom-file-label" for="pic">Choose file</label>
                                            @error('pic')
                                                <div class="invalid-feedback">
                                                    {{ $message }}
                                                </div>
                                            @enderror
                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button type="submit" class="btn btn-primary">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        @if ($employee->documents->isNotEmpty())
            <div class="col-9">
                <div class="card">
                    <div class="card-primary">
                        <div class="card-header">
                            <h3 class="card-title">Employee Documents <b>({{ $employee->name }})</b></h3>
                        </div>

                        <div class="card-body">
                            <table class="table table-striped table-hover">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Type</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    @foreach ($employee->documents as $document)
                                        <tr>
                                            <td>{{ $loop->iteration }}</td>
                                            <td>{{ $document->name }}</td>
                                            <td>{{ $document->type }}</td>
                                            <td>
                                                <div class="d-flex align-items-center">
                                                    <a href="javascript:void(0)"
                                                        class="btn btn-info rounded-circle mr-2 preview"
                                                        data-url="{{ asset($document->path) }}"
                                                        data-name="{{ $document->name }}">
                                                        <i class="fa fa-eye"></i>
                                                    </a>
                                                    <a href="javascript:void(0)"
                                                        class="btn btn-danger rounded-circle delete"
                                                        id="{{ $document->id }}">
                                                        <i class="fa fa-trash"></i>
                                                    </a>
                                                </div>
                                            </td>
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>


            {{-- Preview Modal --}}
            <div class="modal fade" id="previewModal" tabindex="-1">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Document Preview - <span class="document-name"></span></h5>
                            <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div>
                                <img src="" alt="doc-preview" id="document-preview"
                                    class="img-fluid d-block m-auto">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

            {{-- Delete Form --}}
            <form action="{{ route('admin.employee.document.delete', 11111) }}" id="delete-form" method="post">
                @csrf
                @method('DELETE')
            </form>


            @section('js')
                <script>
                    const previewModal = $('#previewModal')
                    const deleteForm = $('#delete-form')

                    $('.preview').click(function() {
                        $('#document-preview').attr('src', $(this).data('url'))
                        $('.document-name').text($(this).data('name'))
                        previewModal.modal('show')
                    })

                    $('.delete').click(function() {
                        if (confirm('Are you sure you want to delete this document?')) {
                            deleteForm.attr('action', deleteForm.attr('action').replace('11111', this.id))
                                .submit()
                        }
                    })
                </script>
            @endsection


        @endif

    </div>


</x-admin>
