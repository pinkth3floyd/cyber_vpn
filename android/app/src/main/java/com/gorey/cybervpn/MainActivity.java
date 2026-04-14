package com.gorey.cybervpn;

import android.net.Uri;

import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {

    private Uri userdata;

        

public void onCreate(android.os.Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        userdata = getIntent().getData();
//        string name="";





    }

    


}
