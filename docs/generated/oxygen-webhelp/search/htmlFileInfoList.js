fil = new Array();
fil["0"]= "Administration/Administration_title.html@@@Administration@@@The store command provides arguments to view a list of all pipelines and to import a pipeline...";
fil["1"]= "Alerts/RulesAlerts_title.html@@@Rules and Alerts@@@You can define the email addresses to receive metric and data alerts. When an alert triggers an email, the Data Collector sends an email to every address in the list...";
fil["2"]= "Apx-DataFormats/DataFormat_Title.html@@@Data Formats by Stage@@@The following table lists the data formats supported by each destination...";
fil["3"]= "Apx-GrokPatterns/GrokPatterns_title.html@@@Grok Patterns@@@You can use the grok patterns in this appendix to define the structure of log data...";
fil["4"]= "Apx-RegEx/RegEx-Title.html@@@Regular Expressions@@@Though generally not required, you can use Java-based regular expressions at various locations within a pipeline to define, search for, or manipulate strings...";
fil["5"]= "Cluster_Mode/ClusterPipelines_title.html@@@Cluster Pipelines@@@Complete the following steps to configure a cluster pipeline to read from MapR in cluster streaming mode...";
fil["6"]= "DPM/AggregatedStatistics.html@@@Aggregated Statistics for Pipelines@@@You can configure a pipeline to aggregate statistics after the Data Collector has been registered with DPM...";
fil["7"]= "DPM/DPM.html@@@Meet Dataflow Performance Manager@@@DPM provides the same level of detailed monitoring for topologies and jobs that you are accustomed to seeing for pipelines within Data Collector...";
fil["8"]= "DPM/DPMConfiguration.html@@@DPM Configuration@@@You can customize how a Data Collector works with DPM by editing the DPM configuration file, dpm.properties...";
fil["9"]= "DPM/DPM_title.html@@@Dataflow Performance Manager@@@...";
fil["10"]= "DPM/OrgUserAccount.html@@@Request a DPM Organization and User Account@@@To register a Data Collector with DPM,\n        you must have a DPM user account within an organization...";
fil["11"]= "DPM/PipelineManagement.html@@@Pipeline Management with DPM@@@If you develop pipelines in a Data Collector that is not registered with DPM, you can export the pipelines and then import the pipelines into DPM. When a Data Collector is registered with DPM, it&apos;s simplest to publish the pipelines directly to DPM...";
fil["12"]= "DPM/RegisterSDCwithDPM.html@@@Register Data Collector with DPM@@@After a Data Collector is registered with DPM, the Data Collector communicates with DPM at regular intervals - around every 30 seconds or less. If a Data Collector cannot connect to DPM, due to a network or system outage, then the Data Collector uses the DPM disconnected mode...";
fil["13"]= "DPM/UnregisterSDCwithDPM.html@@@Unregister Data Collector from DPM@@@You can unregister a Data Collector from DPM using the Data Collector command line interface...";
fil["14"]= "DPM/WorkingWithDPM.html@@@Working with DPM@@@Before you can work with DPM, you must have a DPM organization and user account...";
fil["15"]= "Data_Preview/DataPreview_Title.html@@@Data Preview@@@In data preview, you can edit stage properties to see how the changes affect preview data. For example, you might edit the expression in an Expression Evaluator to see how the expression alters data...";
fil["16"]= "Destinations/AmazonS3.html@@@Amazon S3@@@You can configure the destination to use Amazon Web Services server-side encryption\n        (SSE) to protect data written to Amazon S3. When configured for server-side encryption, the destination passes required server-side encryption configuration values to Amazon S3. Amazon S3 uses the values to encrypt the data as it is written to Amazon S3...";
fil["17"]= "Destinations/Bigtable.html@@@Google Bigtable@@@The time basis determines the timestamp value added for each column written to Google Cloud Bigtable...";
fil["18"]= "Destinations/Cassandra.html@@@Cassandra@@@The Cassandra destination writes data to a Cassandra cluster...";
fil["19"]= "Destinations/DataLakeStore.html@@@Azure Data Lake Store@@@The Azure Data Lake Store destination writes data to the Microsoft Azure Data Lake Store. Use the Azure Data Lake Store destination in standalone pipelines only at this time. Before you use the...";
fil["20"]= "Destinations/Destinations-title.html@@@Destinations@@@...";
fil["21"]= "Destinations/Destinations_overview.html@@@Destinations@@@A destination stage represents the target for a pipeline. You can use one or more destinations in a pipeline...";
fil["22"]= "Destinations/Elasticsearch.html@@@Elasticsearch@@@When appropriate, you can specify the expression that defines the document ID. When you do not specify an expression, Elasticsearch generates IDs for each document...";
fil["23"]= "Destinations/Flume.html@@@Flume@@@The Flume destination writes data to a Flume source. When you write data to Flume, you pass data to a Flume client. The Flume client passes data to hosts based on client configuration properties...";
fil["24"]= "Destinations/HBase.html@@@HBase@@@The time basis determines the timestamp value added for each column written to HBase...";
fil["25"]= "Destinations/HadoopFS-destination.html@@@Hadoop FS@@@You can configure the Hadoop FS destination to use an HDFS user to write data to HDFS...";
fil["26"]= "Destinations/Hive.html@@@Hive Streaming@@@The Hive Streaming destination writes data to Hive tables stored in the ORC (Optimized Row Columnar) file format...";
fil["27"]= "Destinations/HiveMetastore.html@@@Hive Metastore@@@You must configure Hive Metastore to use Hive and Hadoop configuration files and individual properties...";
fil["28"]= "Destinations/InfluxDB.html@@@InfluxDB@@@The InfluxDB destination writes data to an InfluxDB database...";
fil["29"]= "Destinations/JDBCProducer.html@@@JDBC Producer@@@Configure the JDBC Producer to use JDBC to write data to a database table...";
fil["30"]= "Destinations/KProducer.html@@@Kafka Producer@@@The partition strategy determines how to write data to Kafka partitions. You can use a partition strategy to balance the work load or to write data semantically...";
fil["31"]= "Destinations/KinFirehose.html@@@Kinesis Firehose@@@The Kinesis Firehose destination writes data to an existing delivery stream in Amazon Kinesis Firehose. Before using the Kinesis Firehose destination, use the AWS Management Console to create a delivery stream to an Amazon S3 bucket or Amazon Redshift table...";
fil["32"]= "Destinations/KinProducer.html@@@Kinesis Producer@@@When Data Collector writes data to a Kinesis Producer destination, it must pass credentials to Amazon Web Services...";
fil["33"]= "Destinations/Kudu.html@@@Kudu@@@To write to Kudu, you configure the destination to perform one of the following write operations: insert, update, delete, or upsert. You define the default operation for the destination. You can also define the operation in a record header attribute...";
fil["34"]= "Destinations/LocalFS.html@@@Local FS@@@Use the Local FS destination to write records to files in a local file system. When you configure a Local FS destination, you can define a directory template and time basis to determine the output...";
fil["35"]= "Destinations/MapRDB.html@@@MapR DB@@@You can configure the MapR DB destination to use an HBase user to write data to MapR DB...";
fil["36"]= "Destinations/MapRFS.html@@@MapR FS@@@You can configure the MapR FS destination to use an HDFS user to write data to MapR FS...";
fil["37"]= "Destinations/MapRStreamsProd.html@@@MapR Streams Producer@@@The MapR Streams Producer destination writes messages to MapR Streams...";
fil["38"]= "Destinations/MongoDB.html@@@MongoDB@@@Configure a MongoDB destination to write to MongoDB...";
fil["39"]= "Destinations/RabbitMQ.html@@@RabbitMQ Producer@@@RabbitMQ Producer writes AMQP messages to a single RabbitMQ queue...";
fil["40"]= "Destinations/Redis.html@@@Redis@@@When you configure the destination for batch mode, you select the incoming fields to use as the Redis key and value. You also select the data type of the Redis value. If needed, the Redis destination converts the Data Collector data type of the incoming value field to the selected Redis data type...";
fil["41"]= "Destinations/SDC_RPCdest.html@@@SDC RPC@@@The SDC RPC destination compresses data by default when passing data to an SDC RPC origin. When necessary, you can disable compression in the destination...";
fil["42"]= "Destinations/Salesforce.html@@@Salesforce@@@The Salesforce destination writes data to Salesforce objects...";
fil["43"]= "Destinations/Solr.html@@@Solr@@@You can use Kerberos authentication to connect to a Solr node or cluster. When you use Kerberos authentication, Data Collector uses the Kerberos principal and keytab to connect to Solr...";
fil["44"]= "Destinations/ToError.html@@@To Error@@@The To Error destination passes records to the pipeline for error handling. Use the To Error destination to send a stream of records to pipeline error handling...";
fil["45"]= "Destinations/Trash.html@@@Trash@@@The Trash destination discards records. Use the Trash destination as a visual representation of records discarded from the pipeline. Or, you might use the Trash destination during development as a temporary placeholder...";
fil["46"]= "Destinations/WaveAnalytics.html@@@Wave Analytics@@@The Wave Analytics destination typically creates multiple datasets, based on the configured dataset wait time. You can optionally configure the destination to use a Wave Analytics dataflow to combine multiple datasets together...";
fil["47"]= "Event_Handling/EventFramework-Title.html@@@Event Framework@@@The event framework enables the pipeline to trigger tasks in external systems based on actions that occur in the pipeline, such as running a MapReduce job after the pipeline writes a file to HDFS. You...";
fil["48"]= "Executors/Executors-overview.html@@@Executors@@@An executor stage executes a task in an external system when it receives an event - it does not write or store events. Use executor stages as part of an event stream to perform event-driven...";
fil["49"]= "Executors/Executors-title.html@@@Executors@@@...";
fil["50"]= "Executors/HDFSMetadata.html@@@HDFS File Metadata Executor@@@The HDFS File Metadata executor changes file metadata for closed files in HDFS, MapR FS, or a local file system each time it receives a file closure event record. Use the HDFS File Metadata executor...";
fil["51"]= "Executors/HiveQuery.html@@@Hive Query Executor@@@The Hive Query executor connects to Hive or Impala and performs a user-defined Hive or Impala query each time it receives an event record. Use the Hive Query executor as part of an event stream to...";
fil["52"]= "Executors/JDBCQuery.html@@@JDBC Query Executor@@@The JDBC Query executor connects through JDBC to a database and performs a user-defined SQL query each time it receives an event record. Use the JDBC Query executor as part of an event stream in the...";
fil["53"]= "Executors/MapReduce.html@@@MapReduce Executor@@@The MapReduce executor starts a MapReduce job in HDFS or MapR FS each time it receives an event record. Use the MapReduce executor as part of an event stream. You can use the MapReduce executor to...";
fil["54"]= "Expression_Language/Constants.html@@@Constants@@@The expression language provides constants for use in expressions. In a pipeline, you can also create constants for use within the pipeline...";
fil["55"]= "Expression_Language/DateTimeVariables.html@@@Datetime Variables@@@The expression language provides datetime variables for use in expressions...";
fil["56"]= "Expression_Language/ExpressionLanguage_overview.html@@@Expression Language@@@The StreamSets expression language enables you to create expressions that evaluate or modify data. The StreamSets expression language is based on the JSP 2.0 expression language. Use the expression...";
fil["57"]= "Expression_Language/ExpressionLanguage_title.html@@@Expression Language@@@...";
fil["58"]= "Expression_Language/Functions.html@@@Functions@@@Use time functions to return the current time or to transform datetime data...";
fil["59"]= "Expression_Language/Literals.html@@@Literals@@@The expression language includes the following literals...";
fil["60"]= "Expression_Language/Operators.html@@@Operators@@@The precedence of operators highest to lowest, left to right is as follows...";
fil["61"]= "Expression_Language/ReservedWords.html@@@Reserved Words@@@The following words are reserved for the expression language and should not be used as identifiers...";
fil["62"]= "Getting_Started/GettingStarted_Title.html@@@Getting Started@@@Data Collector provides a console to configure pipelines, preview data, monitor pipelines, and review snapshots of data...";
fil["63"]= "Glossary/Glossary_title.html@@@Glossary@@@batch A set of records that passes through a pipeline. Data Collector processes data in batches. cluster execution mode Pipeline execution mode that allows you to process large volumes of data from...";
fil["64"]= "Hive_Drift_Solution/HiveDriftSolution_title.html@@@Hive Drift Solution@@@Now what happens when you start the pipeline?...";
fil["65"]= "Install_Config/AdditionalDrivers.html@@@Additional Drivers@@@You can install additional drivers for stages. Before you use the following stages, you need to install drivers for the implementation that you want to use: JDBC Consumer origin JMS Consumer origin...";
fil["66"]= "Install_Config/AdditionalStageLibraries.html@@@Additional Stage Libraries@@@The Data Collector includes a wide range of stages for pipeline development, but you might need additional functionality. You can install stage libraries to provide access to additional stages...";
fil["67"]= "Install_Config/Authentication.html@@@User Authentication@@@For file-based authentication, Data Collector provides a default user account based on each role. You can change or remove these accounts.\n        You can also create new user accounts. For increased security, change the passwords for the default accounts...";
fil["68"]= "Install_Config/CMInstall-Overview.html@@@Installation with Cloudera Manager@@@To enable Data Collector to use Kerberos, use Cloudera Manager...";
fil["69"]= "Install_Config/CoreInstall_Overview.html@@@Core Installation@@@When you install from the RPM package, Data Collector uses the default directories and the default system user and group...";
fil["70"]= "Install_Config/CreateAnotherDC.html@@@Creating Another Data Collector Instance@@@You can create another instance of a Data Collector tarball or RPM installation on the same machine with the create-dc command.\n        The additional Data Collector instance uses the same configuration as the original Data Collector instance. You can modify the configuration properties as needed...";
fil["71"]= "Install_Config/CustomStageLibraries.html@@@Custom Stage Libraries@@@If you develop custom stages, store the stage libraries in a local directory external to the Data Collector installation directory. Use an external directory to enable use of the custom stage...";
fil["72"]= "Install_Config/DCConfig.html@@@Data Collector Configuration@@@You can customize Data Collector by editing the Data Collector configuration file, sdc.properties...";
fil["73"]= "Install_Config/DCEnvironmentConfig.html@@@Data Collector Environment Configuration@@@You can edit the Data Collector environment configuration file to configure the path to JAR files to be added to the Data Collector root classloader...";
fil["74"]= "Install_Config/FullInstall_ServiceStart.html@@@Full Installation and Launch (Service Start)@@@This procedure walks through setting the default directories and the default system user and group used to start Data Collector as a service...";
fil["75"]= "Install_Config/Install_Config_title.html@@@Installation and Configuration@@@...";
fil["76"]= "Install_Config/InstallationAndConfig.html@@@Installation@@@Install Data Collector on a machine that meets the following minimum requirements. To run pipelines in cluster execution mode, each node in the cluster must meet the minimum requirements...";
fil["77"]= "Install_Config/Installing_the_DC-Docker.html@@@Run Data Collector from Docker@@@You can run the Data Collector image from Docker Hub...";
fil["78"]= "Install_Config/Installing_the_DC.html@@@Full Installation and Launch (Manual Start)@@@To install the full Data Collector and start it manually, download the full Data Collector tarball...";
fil["79"]= "Install_Config/JMXMetrics-EnableExternalTools.html@@@Enabling External JMX Tools@@@You can view the Data Collector JMX metrics in external tools. The Data Collector JMX metric names all begin with &quot;sdc.pipeline.&quot...";
fil["80"]= "Install_Config/LogLevel.html@@@Modifying the Log Level@@@If the Data Collector logs do not provide enough troubleshooting information, you can modify the log level to display messages at another severity level...";
fil["81"]= "Install_Config/MapR-Prerequisites.html@@@MapR Prerequisites@@@Due to licensing restrictions, StreamSets cannot distribute MapR libraries with Data Collector. As a result, you must perform additional steps to enable the Data Collector machine to connect to MapR...";
fil["82"]= "Install_Config/RuntimeProperties.html@@@Using Runtime Properties@@@Use the runtime:conf function to call a runtime property. You can use runtime properties to represent any stage or pipeline property that allows the use of the expression language...";
fil["83"]= "Install_Config/RuntimeResources.html@@@Using Runtime Resources@@@Use the runtime:loadResource function to call a runtime resource. You can use runtime resources to represent sensitive information in any stage or pipeline property that allows the use of the expression language...";
fil["84"]= "Install_Config/Vault-Overview.html@@@Accessing Hashicorp Vault Secrets@@@Data Collector can access information, a.k.a. secrets, stored in Hashicorp Vault...";
fil["85"]= "Origins/AmazonS3.html@@@Amazon S3@@@The Amazon S3 origin uses a buffer to read objects into memory to produce records. The size of the buffer determines the maximum size of the record that can be processed...";
fil["86"]= "Origins/Directory.html@@@Directory@@@Configure a Directory origin to read data from files in a directory...";
fil["87"]= "Origins/FileTail.html@@@File Tail@@@When you use an origin to read log data, you define the format of the log files to be read...";
fil["88"]= "Origins/HTTPClient.html@@@HTTP Client@@@The HTTP Client origin processes data differently based on the data format. The origin processes the following types of data...";
fil["89"]= "Origins/HadoopFS-origin.html@@@Hadoop FS@@@You can configure the Hadoop FS origin to use a Hadoop user to read data from HDFS...";
fil["90"]= "Origins/JDBCConsumer.html@@@JDBC Consumer@@@When reading from Microsoft SQL Server, JDBC Consumer can group row updates from the same transaction when reading from a change log table. This maintains consistency when performing change data capture...";
fil["91"]= "Origins/JMS.html@@@JMS Consumer@@@Configure a JMS Consumer origin to read JMS messages...";
fil["92"]= "Origins/KConsumer.html@@@Kafka Consumer@@@Configure a Kafka Consumer to read data from a Kafka cluster...";
fil["93"]= "Origins/KinConsumer.html@@@Kinesis Consumer@@@You can configure the read interval for the Kinesis Consumer. The read interval determines how long Kinesis Consumer waits before requesting additional data from Kinesis shards.\n  By default, the Kinesis Consumer waits one second between requests...";
fil["94"]= "Origins/MapRFS.html@@@MapR FS@@@You can configure the MapR FS origin to use a Hadoop user to read files from MapR FS...";
fil["95"]= "Origins/MapRStreamsCons.html@@@MapR Streams Consumer@@@Configure a MapR Streams Consumer to read messages from MapR Streams...";
fil["96"]= "Origins/MongoDB.html@@@MongoDB@@@You can configure the read preference that the MongoDB origin uses. The read preference determines how the origin reads data from different members of the MongoDB replica set...";
fil["97"]= "Origins/MySQLBinaryLog.html@@@MySQL Binary Log@@@The binary log file captures all changes made to the MySQL database. If you want the MySQL Binary Log origin to capture changes from a subset of tables, you can configure the origin to include changes from specific tables or to ignore changes from specific tables...";
fil["98"]= "Origins/Omniture.html@@@Omniture@@@The Omniture origin processes JSON website usage reports generated by the Omniture reporting APIs. Omniture is also known as the Adobe Marketing Cloud...";
fil["99"]= "Origins/OracleCDC.html@@@Oracle CDC Client@@@The Oracle CDC Client processes change data capture (CDC) information provided by Oracle LogMiner redo logs. The Oracle CDC Client origin produces records with a map of fields and record header...";
fil["100"]= "Origins/Origins_overview.html@@@Origins@@@You can preview raw source data for Directory, File Tail, and Kafka Consumer origins.\n        Preview raw source data when reviewing the data might help with origin configuration...";
fil["101"]= "Origins/Origins_title.html@@@Origins@@@...";
fil["102"]= "Origins/RabbitMQ.html@@@RabbitMQ Consumer@@@Configure a RabbitMQ Consumer to read messages from a RabbitMQ queue...";
fil["103"]= "Origins/Redis.html@@@Redis Consumer@@@When you use an origin to read log data, you define the format of the log files to be read...";
fil["104"]= "Origins/SDCRPCtoKafka.html@@@SDC RPC to Kafka@@@Configure the SDC RPC to Kafka maximum batch request size and message size properties in relationship to each other and to the Kafka configuration for maximum message size...";
fil["105"]= "Origins/SDC_RPCorigin.html@@@SDC RPC@@@The SDC RPC origin enables connectivity between two SDC RPC pipelines. The SDC RPC origin reads data passed from an SDC RPC destination. Use the SDC RPC origin as part of an SDC RPC destination pipeline...";
fil["106"]= "Origins/SFTP.html@@@SFTP/FTP Client@@@If the remote server requires authentication, configure the authentication method that the origin must use to log in to the remote server...";
fil["107"]= "Origins/Salesforce.html@@@Salesforce@@@The Salesforce origin generates Salesforce header attributes that provide additional information about each record, such as the source objects for the record. The origin receives these details from Salesforce...";
fil["108"]= "Origins/UDP.html@@@UDP Source@@@The UDP Source origin reads messages from one or more UDP ports. UDP Source generates a record for every message. UDP Source can read collectd messages, Netflow messages from NetFlow Version 5, and...";
fil["109"]= "Origins/UDPtoKafka.html@@@UDP to Kafka@@@When you use a UDP to Kafka origin in a pipeline, connect the origin to a Trash destination...";
fil["110"]= "Pipeline_Configuration/PipelineConfiguration_title.html@@@Pipeline Configuration@@@Configure a pipeline to define the stream of data. After you configure the pipeline,\n        you can start the pipeline...";
fil["111"]= "Pipeline_Design/ControlCharacters.html@@@Control Character Removal@@@You can use several stages to remove control characters - such as escape or end-of-transmission characters - from data. Remove control characters to avoid creating invalid records...";
fil["112"]= "Pipeline_Design/DatainMotion.html@@@Data in Motion@@@When you configure a pipeline, you define how you want data to be treated: Do you want to prevent the loss of data or the duplication of data?...";
fil["113"]= "Pipeline_Design/DelimitedDataRootFieldTypes.html@@@Delimited Data Root Field Type@@@When reading delimited data, Data Collector can create records that use the list or list-map root field type. When Data Collector creates records for delimited data, it creates a single root field of...";
fil["114"]= "Pipeline_Design/DesigningDataFlow.html@@@Designing the Data Flow@@@You can merge streams of data in a pipeline by connecting two or more stages to the same downstream stage. When you merge streams of data, Data Collector channels the data from all streams to the same stage, but does not perform a join of records in the stream...";
fil["115"]= "Pipeline_Design/DevStages.html@@@Development Stages@@@The Data Collector provides several development stages that you can use to help develop or test pipelines. Note: Do not use development stages in production pipelines. You can use the following...";
fil["116"]= "Pipeline_Design/DroppingUnwantedRecords.html@@@Dropping Unwanted Records@@@Preconditions are conditions that a record must satisfy to enter the stage for processing. Like required fields, if a record does not meet a precondition, it is diverted to the pipeline for error handling. You can define preconditions for any processor and most destination stages...";
fil["117"]= "Pipeline_Design/ErrorHandling.html@@@Error Record Handling@@@Most stages include error record handling options. When an error occurs when processing a record, Data Collector processes records based on the On Record Error property for the stage...";
fil["118"]= "Pipeline_Design/PipelineDesign_title.html@@@Pipeline Concepts and Design@@@...";
fil["119"]= "Pipeline_Design/Protobuf-Prerequisites.html@@@Protobuf Data Format Prerequisites@@@Perform the following prerequisites before reading or writing protobuf data...";
fil["120"]= "Pipeline_Design/SDCRecordFormat.html@@@SDC Record Data Format@@@SDC Record is a proprietary data format that Data Collector uses to generate error records. Data Collector can also use the data format to read and write data...";
fil["121"]= "Pipeline_Design/TextCDelim.html@@@Text Data Format with Custom Delimiters@@@By default, the text data format creates records based on line breaks, creating a record for each line of text. You can configure origins to create records based on custom delimiters. Use custom...";
fil["122"]= "Pipeline_Design/What_isa_Pipeline.html@@@What is a Pipeline?@@@A pipeline describes the flow of data from the origin system to destination systems and defines how to transform the data along the way...";
fil["123"]= "Pipeline_Design/WholeFile.html@@@Whole File Data Format@@@You can use the whole file data format to move entire files from an origin system to a destination system. With the whole file data format, you can transfer any type of file. You cannot perform...";
fil["124"]= "Pipeline_Design/XMLDFormat.html@@@XML Data Format and Data Processing@@@You can parse XML documents from an origin system with an origin enabled for the XML data format. You can also parse XML documents in a field in a Data Collector record with the XML Parser processor...";
fil["125"]= "Pipeline_Maintenance/PipelineMaintenance_title.html@@@Pipeline Maintenance@@@Duplicate a pipeline when you want to keep the existing version of a pipeline while continuing to configure a duplicate version. A duplicate is an exact copy of the original pipeline...";
fil["126"]= "Pipeline_Monitoring/PipelineMonitoring_title.html@@@Pipeline Monitoring@@@You can view a run summary for each run of the pipeline when you view the pipeline history...";
fil["127"]= "Processors/Base64Decoder.html@@@Base64 Field Decoder@@@The Base64 Field Decoder decodes Base64 encoded data to binary data. Use the processor to decode Base64 encoded data before evaluating data in the field...";
fil["128"]= "Processors/Base64Encoder.html@@@Base64 Field Encoder@@@The Base64 Field Encoder encodes binary data using Base64. Use the processor to encode binary data that must be sent over channels that expect ASCII data...";
fil["129"]= "Processors/Expression.html@@@Expression Evaluator@@@You can use expressions to add or modify header attributes for a record...";
fil["130"]= "Processors/FieldFlattener.html@@@Field Flattener@@@The Field Flattener flattens list and map fields. The processor can flatten the entire record to produce a record with no nested fields. Or it can flatten specific list or map fields. Use the Field...";
fil["131"]= "Processors/FieldHasher.html@@@Field Hasher@@@Field Hasher provides several methods to hash data. When you hash a field more than once, Field Hasher uses the existing hash when generating the next hash...";
fil["132"]= "Processors/FieldMasker.html@@@Field Masker@@@You can use the following mask types to mask data...";
fil["133"]= "Processors/FieldMerger.html@@@Field Merger@@@The Field Merger merges one or more fields in a record to a different location in the record. Use only for records with a list or map structure...";
fil["134"]= "Processors/FieldRemover.html@@@Field Remover@@@The Field Remover removes fields from records. Use the Field Remover to discard field data that you do not need in the pipeline. You configure the Field Remover to complete one of the following...";
fil["135"]= "Processors/FieldRenamer.html@@@Field Renamer@@@You can use regular expressions, or regex, to rename sets of fields. You can use regex to define the set of source fields to rename. You can also use regex to define the target field names...";
fil["136"]= "Processors/FieldSplitter.html@@@Field Splitter@@@The Field Splitter splits string data based on a regular expression and passes the separated data to new fields. Use the Field Splitter to split complex string values into logical components...";
fil["137"]= "Processors/FieldTypeConverter.html@@@Field Type Converter@@@You can use the Field Type Converter to change the scale of decimal fields. For example,\n        you might have a decimal field with the value 12345.6789115, and you&apos;d like to decrease the scale to 4 so that the value is 12345.6789...";
fil["138"]= "Processors/FieldZip.html@@@Field Zip@@@The Field Zip processor merges list data from two fields into a single field. You can use the Field Zip processor to merge two List fields or List-Map fields. Use the processor to merge related lists...";
fil["139"]= "Processors/GeoIP.html@@@Geo IP@@@The Geo IP processor is a lookup processor that can return geolocation and IP intelligence information for a specified IP address. The Geo IP processor uses MaxMind GeoIP2 database files for the...";
fil["140"]= "Processors/Groovy.html@@@Groovy Evaluator@@@If Data Collector is using the Java Security Manager and the Groovy code needs to access network resources, you must update the Data Collector security policy to include Groovy scripts. The Java Security Manager is enabled by default...";
fil["141"]= "Processors/HBaseLookup.html@@@HBase Lookup@@@Configure an HBase Lookup processor to perform key-value lookups in HBase...";
fil["142"]= "Processors/HTTPClient.html@@@HTTP Client@@@Configure an HTTP Client processor to perform requests against a resource URL...";
fil["143"]= "Processors/HiveMetadata.html@@@Hive Metadata@@@You must configure Hive Metadata to use Hive and Hadoop configuration files and individual properties...";
fil["144"]= "Processors/JDBCLookup.html@@@JDBC Lookup@@@The JDBC Lookup processor uses a JDBC connection to perform lookups in a database table and pass the lookup values to fields. Use the JDBC Lookup to enrich records with additional data...";
fil["145"]= "Processors/JDBCTee.html@@@JDBC Tee@@@The JDBC Tee processor uses a JDBC connection to write data to a database table, and then pass generated database column values to fields. Use the JDBC Tee to write some or all record fields to a database table and then enrich records with additional data...";
fil["146"]= "Processors/JSONParser.html@@@JSON Parser@@@Configure a JSON Parser to parse a JSON object in a String field...";
fil["147"]= "Processors/JavaScript.html@@@JavaScript Evaluator@@@In scripts that process list-map data, treat the data as maps...";
fil["148"]= "Processors/Jython.html@@@Jython Evaluator@@@In scripts that process list-map data, treat the data as maps...";
fil["149"]= "Processors/ListPivoter.html@@@Field Pivoter@@@Configure a Field Pivoter to pivot data in a list, map, or list-map field and generate a record for each item in the field...";
fil["150"]= "Processors/LogParser.html@@@Log Parser@@@When you use Log Parser to parse log data, you define the format of the log files to be read...";
fil["151"]= "Processors/Processors_overview.html@@@Processors@@@A processor stage represents a type of data processing that you want to perform. You can use as many processors in a pipeline as you need. The Data Collector provides the following processors: Base64...";
fil["152"]= "Processors/Processors_title.html@@@Processors@@@...";
fil["153"]= "Processors/RDeduplicator.html@@@Record Deduplicator@@@The Record Deduplicator caches record information for comparison until it reaches a specified number of records. Then, it discards the information in the cache and starts over...";
fil["154"]= "Processors/RedisLookup.html@@@Redis Lookup@@@Configure a Redis Lookup processor to perform key-value lookups in Redis...";
fil["155"]= "Processors/SalesforceLookup.html@@@Salesforce Lookup@@@The Salesforce Lookup processor performs lookups in a Salesforce object and passes the lookup values to fields. Use the Salesforce Lookup to enrich records with additional data...";
fil["156"]= "Processors/Spark.html@@@Spark Evaluator@@@Install the Spark application JAR file as an additional library for Data Collector. If your custom Spark application depends on additional libraries other than the streamsets-datacollector-api, streamsets-datacollector-spark-api, and spark-core libraries,\n        install those libraries in the same location as well...";
fil["157"]= "Processors/StaticLookup.html@@@Static Lookup@@@Configure a Static Lookup processor to perform key-value lookups in memory...";
fil["158"]= "Processors/StreamSelector.html@@@Stream Selector@@@A condition defines the data that passes to the associated stream. All records that meet the condition pass to the stream. Use the expression language to define conditions...";
fil["159"]= "Processors/ValueReplacer.html@@@Value Replacer@@@The Value Replacer replaces values in fields. You can use the Value Replacer to perform the following tasks: Replace field values with nulls, optionally based on a condition Replace null values in...";
fil["160"]= "Processors/XMLFlattener.html@@@XML Flattener@@@Configure an XML Flattener to flatten XML data embedded in a string field...";
fil["161"]= "Processors/XMLParser.html@@@XML Parser@@@Configure an XML Parser to parse XML data in a string field...";
fil["162"]= "RPC_Pipelines/SDC_RPCpipelines_title.html@@@SDC RPC Pipelines@@@You can enable SDC RPC pipelines to transfer data securely using TLS. To use TLS, enable TLS in both the SDC RPC destination and the SDC RPC origin...";
fil["163"]= "Reusable_Content/Reusable_Topics/Kafka-EnablingSecurity.html@@@Enabling Security@@@When using Kafka version 0.9.0.0 or later , you can configure the Kafka Producer to connect securely through SSL, Kerberos, or both. These versions provide features to support secure connections...";
fil["164"]= "Troubleshooting/Troubleshooting_title.html@@@Troubleshooting@@@Use the following tips for help with monitoring the pipeline...";
fil["165"]= "Tutorial/BasicTutorial.html@@@Basic Tutorial@@@Now that the basic pipeline is complete, you can start it by clicking the Start icon...";
fil["166"]= "Tutorial/BeforeYouBegin.html@@@Before You Begin@@@Before you start this tutorial, you&apos;ll need to do a few things: Download sample data. You can download sample data from the following location...";
fil["167"]= "Tutorial/ExtendedTutorial.html@@@Extended Tutorial@@@Now that the extended pipeline is complete, let&apos;s reset the origin and run the pipeline again...";
fil["168"]= "Tutorial/Overview.html@@@Tutorial Overview@@@This tutorial walks through creating and running a pipeline. You can download sample data so you can perform data preview, run the completed pipeline, and monitor the results...";
fil["169"]= "Tutorial/Tutorial-title.html@@@Tutorial@@@...";
fil["170"]= "Upgrade/CMUpgrade.html@@@Upgrade an Installation with Cloudera Manager@@@After you add the StreamSets repository to Cloudera Manager, you can download and distribute the new StreamSets parcel across the cluster. Stop the StreamSets service and deactivate the previous parcel before you activate the new parcel...";
fil["171"]= "Upgrade/PostUpgrade.html@@@Post Upgrade Tasks@@@Due to a known issue in Data Collector version 1.5.0.0, you can use Vault functions to call Vault secrets from within any pipeline or stage property. If you are upgrading from version 1.5.0.0, update Vault pipelines as needed...";
fil["172"]= "Upgrade/RPM.html@@@Upgrade an Installation from the RPM Package@@@If you installed the core RPM package, install the individual stage libraries that the upgraded pipelines require...";
fil["173"]= "Upgrade/Tarball.html@@@Upgrade an Installation from the Tarball@@@Start the new version of Data Collector...";
fil["174"]= "Upgrade/Upgrade.html@@@Upgrade@@@You can upgrade a previous version of Data Collector to a new version. You can upgrade an installation from the tarball, an installation from the RPM package, or an installation with Cloudera Manager...";
fil["175"]= "Upgrade/UpgradeTroubleshooting.html@@@Troubleshooting an Upgrade@@@Use the following tips for help with upgrades: After upgrading a Data Collector that is registered with DPM , the Data Collector fails to start with the following error about a component ID: Failed...";
fil["176"]= "Upgrade/Upgrade_title.html@@@Upgrade@@@...";
fil["177"]= "WhatsNew/WhatsNew_Title.html@@@What&apos;s New@@@Data Collector version 2.2.1.0 includes the following new features and enhancements: Processors New Field Zip processor - Merges two List fields or two List-Map fields in the same record. New...";
