import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import BookCard from './BookCard';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
  }));

const filterBooks = (books, filter) => {
    if(filter) {
        return books.filter((book) => book.shelf === filter);
    }
    return books;
}

const BookList = (props) => {
    const {books, filter} = props;
    const booksFiltered = filterBooks(books, filter);
    // console.log(`booksFiltered: ${JSON.stringify(booksFiltered)}`);
    const classes = useStyles();
    return (
        <div>
            <Grid container justify="center" className={classes.root} spacing={2}>
                {
                    booksFiltered.map((book)=>(
                        <Grid key={book.title} item >
                            <BookCard book={book}/>
                        </Grid>
                    ))
                }
            </Grid>
        </div>
    );
}

BookList.propTypes = {
    books: PropTypes.array.isRequired,
    filter: PropTypes.string
}

export default BookList;