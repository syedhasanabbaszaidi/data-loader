'use strict'

import * as http from 'http'
import * as fs from 'fs'
import * as path from 'path'
import * as Q from 'Q'

import * as request from './utils/request'
import { IDataLoadingArray } from './interfaces/default'

/**
 * Main function used to execute the data loader process
 * 
 * return {void}
 */
function main(): void {
    // Create a new data loader array

    // Get the configuration files in artifacts/config

    // Run through the list of files and add to the data loader array

    // If required, sync the SFTP paths and get the required files to process.
    // These files need to be synced to the artifacts/pending folder in order
    // to be processed correctly.

    // Log into the database (In this case it would be CouchDB)

    // Register the start of the data loader

    // Load the API / file data to be processed by the loader and add
    // the raw data to the data loading array

    // Process the raw data into the correct format to be loaded into the
    // database.

    // Onced processed, validate the data models produced against the relevant
    // data model schemas

    // Insert the data into the database

    // Archive the data recieved to be processed

    // Register the end of the data loader
    console.log('Main function incomplete!!')

}

main()