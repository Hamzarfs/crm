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
                                <a href="javascript:void(0)" class="picture-modal" data-name="{{ $employee->name }}">
                                    <img src="{{ $employee->avatar ?? 'https://placehold.co/50' }}" alt="picture"
                                        class="picture">
                                </a>
                            </td>
                            <td>{{ $employee->name }}</td>
                            <td>{{ $employee->email }}</td>
                            <td>{{ $employee->phonenumber }}</td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <a
                                        href="{{ route('admin.employee.edit', $employee->id) }}"class="btn btn-sm btn-primary">Edit</a>
                                    <a href="#" class="btn btn-sm btn-secondary mx-2">Upload Documents</a>
                                    <a href="javascript:void(0)" class="btn btn-sm btn-danger delete-btn" id="{{ $employee->id }}">Delete</a>
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

    <!-- Modal -->
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
                if(confirm('Are you sure you want to delete?')) {
                    const form = $('#delete-form')
    
                    form.attr('action', form.attr('action').replace('11111', this.id))
    
                    form.submit()
                }
            })
        </script>
    @endsection
</x-admin>
