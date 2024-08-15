@extends('site.common')

@section('title', 'Welcome')

@section('content')
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Terms and Conditions</title>
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <link href="styles.css" rel="stylesheet">
</head>

<body>
    <div class="container mt-5">
        <h1 class="text-center mb-4 terms-title">Terms and Conditions</h1>

        <div class="mb-5 revision-policy">
            <h2>Revision Policy</h2>
            <p>The chosen package determines the authorized number of revisions. Clients may request changes as specified in the package details. We are committed to delivering excellent services and will revise designs until client needs are met. If design concepts remain unchanged, no additional charges apply.</p>
            <ul>
                <li>New logo version within 48 hours</li>
                <li>Website design adjustments within 24 hours</li>
                <li>Website development revisions within 24 to 48 hours (depending on complexity)</li>
                <li>Illustrative logos have a 48-hour turnaround for revisions.</li>
            </ul>
        </div>

        <div class="mb-5 ownership-rights">
            <h2>Ownership and Rights of the Logo</h2>
            <p>Customer understands that the Company retains the rights to all designs and does not transfer any rights to the customer unless and until the customer purchases exclusive rights to the design. Upon purchasing exclusive rights to a design, the Company provides a Copyright agreement indicating that all rights have been transferred to the customer. The associated fee is $299 (one-time cost).</p>
        </div>

        <div class="mb-5 order-processing-time">
            <h2>New Order Processing Time</h2>
            <p>The turnaround time varies between providing design concepts and purchasing the package:</p>
            <ul>
                <li>New logos: 24 to 48 hours</li>
                <li>Orders with four or more logo concepts: minimum 48-hour turnaround</li>
                <li>New website designs: minimum 48-hour turnaround</li>
                <li>Static websites: three to five business days for development</li>
            </ul>
            <p>Orders placed on Friday or Saturday begin processing on Monday. The first concept for illustrative logos is sent within 48 to 72 hours of order confirmation.</p>
        </div>

        <div class="mb-5 refund-procedure">
            <h2>Refund Procedure</h2>
            <p>Our refund policy is applicable under specific conditions:</p>
            <ul>
                <li>Opting for an all-inclusive plan</li>
                <li>Acceptance of the main design idea</li>
                <li>Requesting adjustments to the design</li>
                <li>Cancellation for non-company-related reasons</li>
                <li>No contact with the company for over two weeks</li>
                <li>Violation of company policies</li>
                <li>Engaging with another business or designer for the same job</li>
                <li>Missing essential details in the creative brief</li>
                <li>Requesting a complete redesign</li>
                <li>Exceeding the “refund request” timeframe</li>
                <li>Changes in the company’s name or operations</li>
            </ul>
            <p>Refunds are granted for the specific service, not the entire bundle. No return request is accepted after final files are sent. Free items are exempt from returns and revisions. No refund for websites or logos after 30 days. Non-refundable services include social media, SEO, domain registration, and web hosting. No returns once the client accepts the website design. RFS Logo Design may refuse any project or terminate the agreement, retaining exclusive rights to the designs after a refund. The designs legally belong to the company.</p>
        </div>

        <div class="mb-5 request-refund">
            <h2>Request Your Refund</h2>
            <p>To initiate a refund, follow these steps:</p>
            <ol>
            <li>Contact us via live chat at our toll-free number <a href="tel:+15516665255">+1 551 666 5255</a></li>
            <li>Send an email to us.</li>
            </ol>
            <p>Upon receiving your refund request, we’ll promptly begin the analysis and processing. Please note that after receiving a refund, you won’t retain ownership rights to designs from RFS Logo Design. The designs will be submitted to Government Copyright Agencies for legal copyright acquisition.</p>
        </div>

        <div class="mb-5 quality-assurance">
            <h2>Quality Assurance Policy</h2>
            <p>Our dedication is to fulfill your needs, and our designers strive to exceed your expectations. We are committed to delivering top-notch designs, and each creation undergoes thorough planning and execution.</p>
        </div>

        <div class="mb-5 satisfaction-guaranteed">
            <h2>100% Satisfaction Guaranteed!</h2>
            <p>We stand by our commitment to your satisfaction with an unlimited revisions policy. We aim not just to meet but also to exceed your expectations. We persist in making adjustments until your design brings you complete delight (number of revisions as per your package).</p>
        </div>

        <div class="mb-5 delivery-policy">
            <h2>Delivery Policy</h2>
            <p>Your complete order and a confirmation email will be sent to your specified account on the agreed-upon date mentioned in the order confirmation. Turnaround times vary based on the chosen package, with a minimum of two business days. For urgent orders, reach out to our customer service team.</p>
        </div>

        <div class="mb-5 record-maintenance">
            <h2>Record Maintenance</h2>
            <p>For your convenience, we retain final designs for up to three months post-project delivery. This ensures you can retrieve identical files in case of order loss. RFS Logo Design designates the account as dormant if a client remains unresponsive for three months, regardless of project progress or deadline expiry. The client must settle the associated penalty fee to reactivate the account and resume project work.</p>
        </div>

        <div class="mb-5 customer-service">
            <h2>24/7 Customer Service</h2>
            <p>Rest assured, our dedicated customer service team is available 24/7, ready to address any questions or concerns. Your satisfaction is our top priority.</p>
        </div>

        <div class="mb-5 communication-policy">
            <h2>Policy on Communication</h2>
            <p>For your security, all communication with RFS Logo Design should be conducted through <a href="mailto:support@rfslogodesign.com">support@rfslogodesign.com</a> or the official phone numbers listed on our website. We cannot be held responsible for messages sent through other platforms. Trust our official channels for accurate and reliable communication.</p>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>

</html>

@endsection
