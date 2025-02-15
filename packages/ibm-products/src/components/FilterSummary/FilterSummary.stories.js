/**
 * Copyright IBM Corp. 2022, 2022
 *
 * This source code is licensed under the Apache-2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { useState } from 'react';
import {
  getStoryTitle,
  prepareStory,
} from '../../global/js/utils/story-helper';
import { FilterSummary } from '.';

import styles from './_storybook-styles.scss';

export default {
  title: getStoryTitle(FilterSummary.displayName),
  component: FilterSummary,
  tags: ['autodocs'],
  parameters: {
    styles,
  },
};

const Template = (args) => {
  const [filters, setFilters] = useState(args.filters);
  const clearFilters = () => setFilters([]);

  return (
    <FilterSummary
      clearFiltersText={args.clearFiltersText}
      filters={filters}
      clearFilters={clearFilters}
    />
  );
};

// eslint-disable-next-line react/prop-types
export const Default = prepareStory(Template, {
  args: {
    clearFiltersText: 'Clear filters',
    filters: [
      { key: 'name', value: 'Thor' },
      { key: 'location', value: 'Asgard' },
      //cspell: disable
      { key: 'weapon', value: 'Mjölnir' },
      //cspell: enable
    ],
  },
});

// eslint-disable-next-line react/prop-types
export const WithManyTags = prepareStory(Template, {
  args: {
    clearFiltersText: 'Clear filters',
    filters: [
      //cspell: disable
      { key: 'project', value: 'Goldmember' },
      //cspell: enable
      { key: 'owner', value: 'Austin Powers' },
      { key: 'middle name', value: 'Danger' },
      { key: 'spy', value: true },
      { key: 'title', value: 'International man of mystery' },
    ],
  },
});
