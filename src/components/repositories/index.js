import React from 'react';
import * as S from './styled';
import RepositoryItem from '../repository-item'

const Repositories = () => {
	return (
		<S.WrapperTabs selectedTabClassName='is-selected' selectedTabPanelClassName='is-selected'>
			<S.WrapperTabList>
				<S.WrapperTab>Repositories</S.WrapperTab>
				<S.WrapperTab>Starred</S.WrapperTab>
			</S.WrapperTabList>
			<S.WrapperTabPanel>
				<RepositoryItem name="url-shortener-dio" linkToRepo="https://github.com/rsnows/url-shortener-dio" fullName="rsnows/url-shortener-dio" />
			</S.WrapperTabPanel>
			<S.WrapperTabPanel>
				<RepositoryItem name="node-auth-DIO" linkToRepo="https://github.com/rsnows/node-auth-DIO" fullName="rsnows/node-auth-DIO" />
			</S.WrapperTabPanel>
		</S.WrapperTabs>
	);
}

export default Repositories;