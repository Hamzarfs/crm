<x-admin>
    @section('title', 'Roles')

    @section('css')
        <style>
            .action-btns a {
                width: 40px;
                height: 40px;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        </style>
    @endsection

    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Roles</h3>
            <div class="card-tools">
                <a href="{{ route('admin.role.create') }}" class="btn btn-sm btn-primary">Add</a>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-striped" id="roleTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Created</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($data as $role)
                        <tr>
                            <td>{{ $role->name }}</td>
                            <td>{{ $role->created_at->format('h:i A d-m-Y') }}</td>
                            <td>
                                <div class="d-flex align-items-center action-btns">
                                    <a href="{{ route('admin.role.edit', $role->id) }}"class="btn btn-sm btn-primary rounded-circle mx-2">
                                        <i class="fa fa-edit"></i>
                                    </a>
                                    <a href="javascript:void(0)" class="btn btn-sm btn-danger delete-btn rounded-circle" id="{{ $role->id }}">
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

    {{-- Delete Form --}}
    <form action="{{ route('admin.role.destroy', 11111) }}" method="post" id="delete-form">
        @csrf
        @method('DELETE')
    </form>

    @section('js')
        <script>
            $(function() {
                $('#roleTable').DataTable({
                    "paging": true,
                    "searching": true,
                    "ordering": true,
                    "responsive": true,
                });
            });

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
