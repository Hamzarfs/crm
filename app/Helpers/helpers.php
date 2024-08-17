<?php

if(!function_exists('transformEmployeeDetailsToArray')) {
    function transformEmployeeDetailsToArray(array $data) : array {
        $returnData = [];
        foreach ($data as $value) {
            $returnData[$value['key']] = $value['value'];
        }
        return $returnData;
    }
}
