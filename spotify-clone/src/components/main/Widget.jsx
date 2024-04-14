import { MainCollection } from './Collections/mainCollection';
import { MainCollectionsWrapper } from './Collections/mainCollectionsWrapper';
import { MainHeader } from './Header/mainHeader';
import { Recent_playlists_and_mixes } from './Recent_playlists_and_mixes/Recent_playlists_and_mixes';
import { MainRoot } from './mainRoot';

export const Main = {
  Root: MainRoot,
  Header: MainHeader,
  Recent: Recent_playlists_and_mixes,
  Collection: MainCollection,
  CollectionsWrapper: MainCollectionsWrapper
}