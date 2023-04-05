import { Module, VuexModule, Mutation } from 'vuex-module-decorators';
import { getMultiParamModule, MultiParamAction } from '@/modules/core';
import store from './index';

const MODULE_NAME = 'Authstore';

@Module({ namespaced: true, name: MODULE_NAME, dynamic: true, store })
class Store extends VuexModule {

    // ------------------------------------------------------------------------
    // Getters
    // ------------------------------------------------------------------------

    // ------------------------------------------------------------------------
    // Actions
    // ------------------------------------------------------------------------

    // ------------------------------------------------------------------------
    // Mutations
    // ------------------------------------------------------------------------

}

const Authstore = getMultiParamModule<Store>(Store, MODULE_NAME, store);

export {
    Authstore
};
