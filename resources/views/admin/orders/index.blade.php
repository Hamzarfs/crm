<x-admin>
    @section('title', 'Orders')

    <div class="card">
        <div class="card-header">
            <h3 class="card-title">Orders</h3>
        </div>
        <div class="card-body">
            <table class="table table-striped" id="ordersTable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Product</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse ($orders as $o)
                        <tr>
                            <td>{{ $loop->iteration }}</td>
                            <td>{{ $o->user->name }}</td>
                            <td>
                            @if($o->product && !empty($o->product->name))
                                {{ $o->product->name }}
                            @endif    
                        
                            </td>


                            <td>
                                @if($o->product && !empty($o->product->name))
                                <button class="btn btn-primary preview-btn"
                                    data-file='{{ $o->user->id }}_{{ $o->product->id }}.png' data-toggle="modal"
                                    data-target="#previewModal">
                                    Preview
                                </button>
                                @endif    
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="4">
                                No orders placed
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>
        </div>
    </div>

    <!-- Modal -->
    <div class="modal fade" id="previewModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Logo Preview</h5>
                    <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div>
                        <img src="" alt="logo-preview" id="logo" class="img-fluid">
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
            $(function() {
                $('#ordersTable').DataTable({
                    "paging": true,
                    "searching": true,
                    "ordering": true,
                    "responsive": true,
                });
            });

            $('.preview-btn').on('click', function() {
                const file = $(this).data('file')
                const fileUrl = "{{ asset('orders/file') }}".replace('file', file)
                $('#logo').attr('src', fileUrl)
            })
        </script>
    @endsection
</x-admin>
