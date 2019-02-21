import { nameFactory } from "src/helper/utils";
import createLogger from "vuex/dist/logger";
import contract from "./contract";
import {
  ContractActionName,
  ContractGetterName,
  ContractMutationName
} from "./contract/names";
import settings from "./settings";
import {
  SettingsActionName,
  SettingsGetterName,
  SettingsMutationName
} from "./settings/names";
import web3 from "./web3";
import { Web3ActionName, Web3GetterName, Web3MutationName } from "./web3/names";

const VuexStoreProperties = {
    modules: {
      settings,
      web3,
      contract
    },
    plugins: process.env.DEV ? [createLogger()] : []
  };
export default VuexStoreProperties;

export const ActionsName = {
  contract: nameFactory("contract", ContractActionName),
  settings: nameFactory("settings", SettingsActionName),
  web3: nameFactory("web3", Web3ActionName)
};

export const MutationsName = {
  contract: nameFactory("contract", ContractMutationName),
  settings: nameFactory("settings", SettingsMutationName),
  web3: nameFactory("web3", Web3MutationName)
};

export const GettersName = {
  contract: nameFactory("contract", ContractGetterName),
  settings: nameFactory("settings", SettingsGetterName),
  web3: nameFactory("web3", Web3GetterName)
};
