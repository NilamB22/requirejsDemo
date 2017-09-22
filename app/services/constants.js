define(['angular','../app'],
 function(angular,app) {
            app.constant('configConst',{
                // 'IP':'http://10.30.9.27:8080/',
                // 'Bucket':'kd-dicom-samples'

                'IP':' http://localhost:7000/',
                'Bucket':'samplectharsh'
            })

     return app;
}
);