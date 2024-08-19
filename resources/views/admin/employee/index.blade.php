@section('title', 'Employees')

@section('css')
    <style>
        table tbody tr td {
            vertical-align: middle !important;
        }

        .picture {
            width: 50px;
            height: 50px;
        }

        .action-btns a {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    </style>
@endsection

<x-admin>
    <div class="card">
        <div class="card-header">
            <div class="card-tools">
                <a href="{{ route('admin.employee.create') }}" class="btn btn-sm btn-info">New</a>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-striped" id="employeesTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($employees as $employee)
                        <tr>
                            <td>{{ $employee->id }}</td>
                            <td>
                                <a href="javascript:void(0)"
                                    @if ($employee->avatar) class="picture-modal" @endif
                                    data-name="{{ $employee->name }}">
                                    <img src="{{ $employee->avatar ? asset("$employee->avatar") : 'https://placehold.co/50' }}"
                                        alt="picture" class="picture">
                                </a>
                            </td>
                            <td>{{ $employee->name }}</td>
                            <td>{{ $employee->email }}</td>
                            <td>{{ $employee->phonenumber }}</td>
                            <td>
                                <div class="d-flex align-items-center action-btns">
                                    <a
                                        href="{{ route('admin.employee.show', $employee->id) }}"class="btn btn-sm btn-info rounded-circle">
                                        <i class="fa fa-eye"></i>
                                    </a>
                                    <a
                                        href="{{ route('admin.employee.edit', $employee->id) }}"class="btn btn-sm btn-primary rounded-circle mx-2">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                    <a href="{{ route('admin.employee.uploadDocumentsView', $employee->id) }}"
                                        class="btn btn-sm btn-secondary mr-2 rounded-circle">
                                        <i class="fas fa-file-upload"></i>
                                    </a>
                                    <a href="javascript:void(0)" class="btn btn-sm btn-danger delete-btn rounded-circle"
                                        id="{{ $employee->id }}">
                                        <i class="fa fa-trash"></i>
                                    </a>
                                </div>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="7">
                                No employees found. <a href="{{ route('admin.employee.create') }}">Add new employee</a>
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>

    {{-- Delete Form --}}
    <form action="{{ route('admin.employee.destroy', 11111) }}" method="post" id="delete-form">
        @csrf
        @method('DELETE')
    </form>

    {{-- Picture Modal --}}
    <div class="modal fade" id="pictureModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header align-items-center">
                    <h5 class="modal-title"></h5>
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div>
                        <img src="" alt="logo-preview" id="picture" class="img-fluid d-block mx-auto">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>

    @section('js')
        <script>
            const pictureModal = $('#pictureModal')

            $(function() {
                @if (count($employees))
                    $('#employeesTable').DataTable({
                        "paging": true,
                        "searching": true,
                        "ordering": true,
                        "responsive": true,
                    })
                @endif
            })

            $('.picture-modal').click(function() {
                const name = $(this).data('name')
                const imgLink = $(this).find('img').attr('src')
                pictureModal.find('.modal-title').text(name)
                pictureModal.find('#picture').attr('src', imgLink)
                pictureModal.modal('show')
            })

            $('.delete-btn').click(function() {
                if (confirm('Are you sure you want to delete?')) {
                    const form = $('#delete-form')
                    form.attr('action', form.attr('action').replace('11111', this.id))
                    form.submit()
                }
            })
        </script>
    @endsection
</x-admin>
