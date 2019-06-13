import * as listActions from '../actions/list.actions';
import { EntityState, createEntityAdapter } from '@ngrx/entity';

export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: 'Hardcover' | 'Paperback' | 'E-Book';
}


export interface State extends EntityState<BookEntity> { }

export const adapter = createEntityAdapter<BookEntity>();

const initialState: State = {
  ids: ['1', '2'],
  entities: {
    1: {
      id: '1',
      title: 'The Art of War',
      author: 'Sun Tzu',
      format: 'Hardcover'
    },
    2: {
      id: '2',
      title: 'The Motley Fool Investment Guide',
      author: 'David & Tom Gardner',
      format: 'E-Book'
    },
    32: {
      id: '2',
      title: 'Moby Dick',
      author: 'Herman',
      format: 'Hardcover'
    },
    4: {
      id: '3',
      title: 'How To Win Friends and Influence People',
      author: 'Dale Carnegie',
      format: 'Paperback'
    }
  }
};

export function reducer(state: State = initialState, action: listActions.All): State {
  switch (action.type) {

    case listActions.ADD_ITEM: {
      return adapter.addOne(action.payload, state);
    }

    case listActions.REMOVE_ITEM: {
      return adapter.removeOne(action.payload.id, state);
    }

    default: {
      return state;
    }
  }
}
