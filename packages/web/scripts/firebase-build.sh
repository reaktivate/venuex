#!/usr/bin/env bash

BUILD_DIR=build/firebase

yarn run clean \
    && mkdir -p ${BUILD_DIR}/functions \
    && mkdir -p ${BUILD_DIR}/public \
    && cp package.json ${BUILD_DIR}/functions \
    && cp router.js ${BUILD_DIR}/functions \
    && babel firebase/functions -d ${BUILD_DIR}/functions --copy-files --source-maps \
    && cp -R firebase/public ${BUILD_DIR} \
    && NEXT_DIST_DIR=../${BUILD_DIR}/functions/next yarn run build
