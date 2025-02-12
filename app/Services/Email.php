<?php

namespace App\Services;

use Webklex\IMAP\Facades\Client;
use Webklex\PHPIMAP\Client as PHPIMAPClient;
use Webklex\PHPIMAP\Message;

class Email
{
    private PHPIMAPClient $client;

    const array FOLDERS = [
        'inbox' => 'INBOX',
        'trash' => 'Trash',
        'sent' => 'Sent',
        'drafts' => 'Drafts',
    ];

    const array EXCLUDE_FOLDERS = [
        'Junk'
    ];

    /**
     * Create a new class instance.
     */
    public function __construct()
    {
        $this->client = Client::account('default');
        $this->client->connect();
    }

    /**
     * Fetch folders & their meta (mails count)
     */
    public function fetchFoldersAndMeta(): array
    {
        $meta = [];

        $folders = $this->client->getFolders()->all();

        foreach ($folders as $folder) {
            $meta[strtolower($folder->name)] = $folder->messages()->all()->count();

            if ($folder->children->isNotEmpty()) {
                foreach ($folder->children->all() as $childFolder) {
                    if (array_search($childFolder->name, self::EXCLUDE_FOLDERS) !== false)
                        continue;
                    $meta[strtolower($childFolder->name)] = $childFolder->messages()->all()->count();
                }
            }
        }

        return $meta;
    }

    /**
     * Fetch mails for a specific folder
     */
    public function fetchMails(string $_folder): array
    {
        $folder = $this->client->getFolder(self::FOLDERS[$_folder]);

        $mails = $folder->messages()->all()->get()->all();

        foreach ($mails as $mail) {
            /**
             * @var Message $mail
             */
            dd(
                $mail->getFrom()->first()->personal,
                $mail->getFrom()->first()->mail
            );
            dd(
                $mail->getFrom()->first(),
                $mail->getFrom()->all()['mail']
            );
            dd(
                $mail->getFrom()->get('personal'),
                $mail->getFrom()->get('mail')
            );
            $mail->getFrom()->get('personal');
            $mail->getFrom()->get('mail');


            # code...
        }

        dd($mails);

        return $mails;
    }

    /**
     * Use this function to fetch all folders including children 
     * folders & fetch emails of the respective folder & return 
     * a structured array
     * [
     *      <FOLDER_NAME> => [
     *          ...EMAILS
     *      ],
     *      ....
     * ]
     */
    public function fetchAllFolderAndReturn()
    {
        $returnArray = [];
        $folders = $this->client->getFolders()->all();

        foreach ($folders as $folder) {
            $returnArray[strtolower($folder->name)] = $folder->messages()->all()->get();

            if ($folder->children->isNotEmpty()) {
                foreach ($folder->children->all() as $childFolders) {
                    if (strtolower($childFolders->name) === 'junk')
                        continue;
                    $returnArray[strtolower($childFolders->name)] = $childFolders->messages()->all()->get();
                }
            }
        }

        return $returnArray;
    }
}
