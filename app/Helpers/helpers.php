<?php

if (!function_exists('transformEmployeeDetailsToArray')) {
    function transformEmployeeDetailsToArray(array $data): array
    {
        $returnData = [];
        foreach ($data as $value) {
            $returnData[$value['key']] = $value['value'];
        }
        return $returnData;
    }
}

if (!function_exists('transformErrorMessagesToIncludeRowNumber')) {
    function transformErrorMessagesToIncludeRowNumber(array $errors): array
    {
        $returnArray = [];
        foreach ($errors as $key => $messages) {
            // Extract the row number from the key
            $row = intval(explode('.', $key)[0]) + 2;

            foreach ($messages as $message) {
                // Modify the message with the correct row number
                $returnArray[] = str_replace(':row', $row, $message);
            }
        }
        return $returnArray;
    }
}
