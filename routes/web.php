<?php

use App\Events\ExampleEvent;
use App\Http\Controllers\EmailController;
use App\Models\User;
use Illuminate\Support\Facades\{Artisan, Broadcast, Route};


Broadcast::routes();

Route::get('test', [EmailController::class, 'fetchFoldersAndMeta']);

Route::get('ttest', [EmailController::class, 'test']);

Route::get('test/{folder}', [EmailController::class, 'fetchMails']);

// Route::get('test', function () {
//     /** @var \Webklex\PHPIMAP\Client $client */
//     $client = Webklex\IMAP\Facades\Client::account('default');

//     // $client->

//     //Connect to the IMAP Server
//     $client->connect();

//     //Get all Mailboxes
//     /** @var \Webklex\PHPIMAP\Support\FolderCollection $folders */
//     $folders = $client->getFolders();

//     dd($folders);

//     // $msgs = [];

//     //Loop through every Mailbox
//     /** @var \Webklex\PHPIMAP\Folder $folder */
//     foreach ($folders as $folder) {
//         // $folder->
//         // $msgs[] = $folder->messages()->all()->get();

//         // continue;
//         //Get all Messages of the current Mailbox $folder
//         /** @var \Webklex\PHPIMAP\Support\MessageCollection $messages */
//         $messages = $folder->messages()->all()->get();

//         // $flags = [];

//         /** @var \Webklex\PHPIMAP\Message $message */
//         foreach ($messages as $i => $message) {
//             // $message->fla


//             // $flags[] = $message->flags();
//             // continue;



//             echo ($i + 1) . ': <br />';
//             // echo $message->getSubject() . '<br />';
//             // echo 'Attachments: ' . $message->getAttachments()->count() . '<br />';
//             echo $message->getHTMLBody() . '<br />';
//             echo $message->flags() . '<br />';
//             // echo $message->getRawBody() . '<br />';


//             //Move the current Message to 'INBOX.read'
//             // if ($message->move('INBOX.read') == true) {
//             //     echo 'Message has ben moved';
//             // } else {
//             //     echo 'Message could not be moved';
//             // }
//         }
//     }


//     dd($flags);
// });

Route::get('/fire-event', function () {
    event(new ExampleEvent(User::find(1)));
    return 'Event Fired!';
});

Route::prefix('artisan')->group(function () {
    Route::get('migrate', function () {
        Artisan::call('migrate');

        $output = Artisan::output();

        return "<pre>$output</pre>";
    });

    Route::get('migrate/fresh', function () {
        Artisan::call('migrate:fresh');

        $output = Artisan::output();

        return "<pre>$output</pre>";
    });

    Route::get('seed', function () {
        Artisan::call('db:seed');

        $output = Artisan::output();

        return "<pre>$output</pre>";
    });
});

Route::get('{any?}', function () {
    return view('application');
})->where('any', '.*');
