@extends('site.common')

@section('title', 'Checking payment status')

@section('content')

    <div>

    </div>



    <script>
        initialize();

        async function initialize() {
            const queryString = window.location.search;
            const urlParams = new URLSearchParams(queryString);
            const sessionId = urlParams.get('session_id');
            const response = await fetch("{{ route('checkPaymentStatus') }}", {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                    "X-CSRF-TOKEN": "{{ csrf_token() }}",
                },
                method: "POST",
                body: JSON.stringify({
                    session_id: sessionId
                }),
            });
            const session = await response.json();

            if (session.status == 'open') {
                location.replace("{{ route('declined') }}")
                // alert('Payment failed! Redirecting to the checkout page.')
                // location.replace("{{ route('checkout') }}")
            } else if (session.status == 'complete') {
                const response = await fetch("{{ route('orderComplete') }}", {
                        method: 'POST',
                        headers: {
                            'X-CSRF-TOKEN': "{{ csrf_token() }}",
                            Accept: 'application/json',
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            logoString: sessionStorage.getItem('logoDataUrl'),
                        })
                    })
                    .then(() => {
                        location.replace("{{ route('thankyou') }}")
                        // $('.action-btns').removeClass('d-none')
                        setTimeout(() => {
                            location.replace("{{ route('maker') }}")
                        }, (10 * 1000));
                    })

                document.getElementById('thankyou-page').classList.remove('d-none');
                document.getElementById('contact').classList.remove('d-none');
            }
        }
    </script>
@endsection
