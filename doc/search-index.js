var searchIndex = {};
searchIndex['scirust'] = {"items":[[0,"","scirust",""],[0,"discrete","",""],[3,"mod_n","scirust::discrete",""],[0,"matrix","scirust",""],[1,"RowIterator","scirust::matrix","An iterator over the elements of a matrix in a row"],[1,"ColIterator","","An iterator over the elements of a matrix in a column"],[1,"CellIterator","","A column major iterator over the elements of a matrix"],[1,"Matrix","","\nRepresents a matrix of numbers."],[1,"MatrixView","","\nDefines a view on a matrix. "],[2,"MatrixError","","Errors related to matrix operations"],[12,"EmptyMatrix","","The matrix is empty",0],[12,"DimensionsMismatch","","The dimensions of two matrices mismatch",0],[12,"NonSquareMatrix","","The matrix is not a square matrix",0],[12,"NotAVector","","The object is not a vector",0],[3,"rand_std_normal","","Generate a random matrix of uniformly distributed numbers"],[10,"fmt","","",0],[10,"new","","Creates a new iterator object",1],[10,"next","","",1],[10,"new","","Creates a new iterator object",2],[10,"next","","",2],[10,"new","","Creates a new iterator object",3],[10,"next","","",3],[10,"from_scalar","","Constructs a scalar matrix",4],[10,"new","","",4],[10,"zeros","","Constructs a matrix of all zeros",4],[10,"ones","","Constructs a matrix of all ones.",4],[10,"identity","","Constructs an identity matrix",4],[10,"from_slice","","",4],[10,"from_iter","","",4],[10,"diag_from_vec","","Construct a diagonal matrix from a vector",4],[10,"unit_vector","","Constructs a unit vector\n(1, 0, 0), (0, 1, 0), (0, 0, 1), etc.",4],[10,"num_rows","","",4],[10,"num_cols","","Returns the number of columns in the matrix",4],[10,"size","","Returns the size of matrix in an (r, c) tuple",4],[10,"num_cells","","Returns the number of cells in matrix",4],[10,"is_row","","Indicates if the matrix is a row vector",4],[10,"is_col","","Indicates if the matrix is a column vector",4],[10,"is_scalar","","Indicates if the matrix is a scalar actually",4],[10,"is_vector","","Indicates if the matrix is a vector",4],[10,"is_empty","","Indicates if the matrix is empty",4],[10,"is_square","","Indicates if the matrix is square",4],[10,"stride","","Returns the number of actual memory elements\nper column stored in the memory",4],[10,"capacity","","Returns the capacity of the matrix\ni.e. the number of elements it can hold",4],[10,"as_ptr","","Returns an unsafe pointer to the matrix's\nbuffer.",4],[10,"as_mut_ptr","","Returns a mutable unsafe pointer to\nthe matrix's underlying buffer",4],[10,"get","","",4],[10,"set","","",4],[10,"index_to_cell","","Converts an index to cell address (row, column)",4],[10,"cell_to_index","","Converts a cell address to an index (r, c) to index",4],[10,"cell_to_offset","","Maps a cell index to actual offset in the internal buffer",4],[10,"is_identity","","Returns if the matrix is an identity matrix",4],[10,"is_diagonal","","Returns if the matrix is a diagonal matrix",4],[10,"to_std_vec","","Converts the matrix to vector from standard library",4],[10,"to_scalar","","Converts the matrix to a scalar",4],[10,"row","","Returns the r'th row vector",4],[10,"col","","Returns the c'th column vector",4],[10,"row_iter","","Returns an iterator over a specific row of matrix",4],[10,"col_iter","","Returns an iterator over a specific column of the matrix",4],[10,"cell_iter","","Returns an iterator over all cells  of the matrix",4],[10,"sub_matrix","","Extract a submatrix from the matrix\nrows can easily repeat if the number of requested rows is higher than actual rows\ncols can easily repeat if the number of requested cols is higher than actual cols",4],[10,"repeat_matrix","","",4],[10,"diagonal","","Extracts the primary diagonal from the matrix as a vector",4],[10,"add_scalar","","Add the matrix by a scalar\nReturns a new matrix",4],[10,"mul_scalar","","Multiply the matrix by a scalar\nReturns a new matrix",4],[10,"div_scalar","","Divide the matrix by a scalar\nReturns a new matrix",4],[10,"pow","","Computes power of a matrix\nReturns a new matrix",4],[10,"transpose","","Computes the transpose of a matrix.\nThis doesn't involve complex conjugation.\nReturns a new matrix",4],[10,"unary_minus","","Computes the unary minus of a matrix",4],[10,"inner_prod","","Inner product or dot product of two vectors\nBoth must be column vectors\nBoth must have same length\nresult = a' * b.",4],[10,"outer_prod","","Outer product of two vectors\nBoth must be column vectors\nBoth must have same length\nresult = a * b'.",4],[10,"append_columns","","Appends one or more columns at the end of matrix",4],[10,"prepend_columns","","Prepends one or more columns at the beginning of matrix",4],[10,"insert_columns","","Inserts columns at the specified location",4],[10,"append_rows","","Appends one or more rows at the bottom of matrix",4],[10,"prepend_rows","","Prepends one or more rows at the top of matrix",4],[10,"insert_rows","","Inserts rows at the specified location",4],[10,"ero_switch","","Row switching.",4],[10,"ero_scale","","Row scaling by a factor.",4],[10,"ero_scale_add","","Row scaling by a factor and adding to another row.\nr_i = r_i + k * r_j",4],[10,"view","","Creates a view on the matrix",4],[10,"max_row_wise","","Returns a column vector consisting of maximum over each row",4],[10,"max_col_wise","","Returns a row vector consisting of maximum over each column",4],[10,"min_row_wise","","Returns a column vector consisting of minimum over each row",4],[10,"min_col_wise","","Returns a row vector consisting of minimum over each column",4],[10,"min_scalar","","",4],[10,"max_scalar","","",4],[10,"min_scalar_value","","Returns the minimum scalar value",4],[10,"max_scalar_value","","Returns the maximum scalar value",4],[10,"abs_min_scalar","","",4],[10,"abs_max_scalar","","",4],[10,"is_logical","","Returns if an integer matrix is a logical matrix",4],[10,"is_finite","","Returns a matrix showing all the cells which are finite",4],[10,"is_infinite","","Returns a matrix showing all the cells which are infinite",4],[10,"index","","",4],[10,"clone","","Creates a clone of the matrix",4],[10,"fmt","","",4],[10,"add","","",4],[10,"sub","","",4],[10,"mul","","",4],[10,"eq","","",4],[10,"mul_elt","","Multiplies matrices element by element",4],[10,"div_elt","","Divides matrices element by element",4],[10,"drop","","",4],[10,"print_state","","",4],[10,"as_slice_","","Returns a slice into `self`.",4],[10,"new","","",5],[10,"start_row","","Returns the start row",5],[10,"num_rows","","Returns the number of rows in the view",5],[10,"num_cols","","Returns the number of columns in the view",5],[10,"size","","Returns the size of view in an (r, c) tuple",5],[10,"num_cells","","Returns the number of cells in view",5],[10,"is_row","","Indicates if the view is a row vector",5],[10,"is_col","","Indicates if the view is a column vector",5],[10,"is_scalar","","Indicates if the view is a scalar actually",5],[10,"is_vector","","Indicates if the view is a vector",5],[10,"is_empty","","Indicates if the view is empty",5],[10,"is_square","","Indicates if the view is square",5],[10,"get","","Gets an element in the view",5],[10,"set","","Sets an element in the view",5],[10,"index_to_cell","","Converts an index to cell address (row, column)",5],[10,"cell_to_index","","Converts a cell address to an index (r, c) to index",5],[10,"to_std_vec","","Converts the view to vector from standard library",5],[10,"to_matrix","","Returns the view as a new matrix.\nCreates a copy of the data.",5],[10,"min_scalar","","",5],[10,"max_scalar","","",5],[10,"min_scalar_value","","Returns the minimum scalar value",5],[10,"max_scalar_value","","Returns the maximum scalar value",5],[10,"abs_min_scalar","","",5],[10,"abs_max_scalar","","",5],[10,"ero_switch","","Row switching.",5],[10,"ero_scale","","Row scaling by a factor.",5],[10,"ero_scale_add","","Row scaling by a factor and adding to another row.\nr_i = r_i + k * r_j\nThe j-th row can be outside the view also.\nThis is the row relative to the start of the view.",5],[10,"add","","",5],[10,"fmt","","",5],[4,"MatrixI64","","A matrix of 64-bit signed integers"],[4,"MatrixF64","","A matrix of 64-bit floating point numbers."],[6,"MatrixElt","","Defines all the traits which a matrix element must support"],[6,"MatrixMul","","\nThis is not yet implemented."],[10,"fmt","","",0],[10,"new","","Creates a new iterator object",1],[10,"next","","",1],[10,"new","","Creates a new iterator object",2],[10,"next","","",2],[10,"new","","Creates a new iterator object",3],[10,"next","","",3],[10,"from_scalar","","Constructs a scalar matrix",4],[10,"new","","",4],[10,"zeros","","Constructs a matrix of all zeros",4],[10,"ones","","Constructs a matrix of all ones.",4],[10,"identity","","Constructs an identity matrix",4],[10,"from_slice","","",4],[10,"from_iter","","",4],[10,"diag_from_vec","","Construct a diagonal matrix from a vector",4],[10,"unit_vector","","Constructs a unit vector\n(1, 0, 0), (0, 1, 0), (0, 0, 1), etc.",4],[10,"num_rows","","",4],[10,"num_cols","","Returns the number of columns in the matrix",4],[10,"size","","Returns the size of matrix in an (r, c) tuple",4],[10,"num_cells","","Returns the number of cells in matrix",4],[10,"is_row","","Indicates if the matrix is a row vector",4],[10,"is_col","","Indicates if the matrix is a column vector",4],[10,"is_scalar","","Indicates if the matrix is a scalar actually",4],[10,"is_vector","","Indicates if the matrix is a vector",4],[10,"is_empty","","Indicates if the matrix is empty",4],[10,"is_square","","Indicates if the matrix is square",4],[10,"stride","","Returns the number of actual memory elements\nper column stored in the memory",4],[10,"capacity","","Returns the capacity of the matrix\ni.e. the number of elements it can hold",4],[10,"as_ptr","","Returns an unsafe pointer to the matrix's\nbuffer.",4],[10,"as_mut_ptr","","Returns a mutable unsafe pointer to\nthe matrix's underlying buffer",4],[10,"get","","",4],[10,"set","","",4],[10,"index_to_cell","","Converts an index to cell address (row, column)",4],[10,"cell_to_index","","Converts a cell address to an index (r, c) to index",4],[10,"cell_to_offset","","Maps a cell index to actual offset in the internal buffer",4],[10,"is_identity","","Returns if the matrix is an identity matrix",4],[10,"is_diagonal","","Returns if the matrix is a diagonal matrix",4],[10,"to_std_vec","","Converts the matrix to vector from standard library",4],[10,"to_scalar","","Converts the matrix to a scalar",4],[10,"row","","Returns the r'th row vector",4],[10,"col","","Returns the c'th column vector",4],[10,"row_iter","","Returns an iterator over a specific row of matrix",4],[10,"col_iter","","Returns an iterator over a specific column of the matrix",4],[10,"cell_iter","","Returns an iterator over all cells  of the matrix",4],[10,"sub_matrix","","Extract a submatrix from the matrix\nrows can easily repeat if the number of requested rows is higher than actual rows\ncols can easily repeat if the number of requested cols is higher than actual cols",4],[10,"repeat_matrix","","",4],[10,"diagonal","","Extracts the primary diagonal from the matrix as a vector",4],[10,"add_scalar","","Add the matrix by a scalar\nReturns a new matrix",4],[10,"mul_scalar","","Multiply the matrix by a scalar\nReturns a new matrix",4],[10,"div_scalar","","Divide the matrix by a scalar\nReturns a new matrix",4],[10,"pow","","Computes power of a matrix\nReturns a new matrix",4],[10,"transpose","","Computes the transpose of a matrix.\nThis doesn't involve complex conjugation.\nReturns a new matrix",4],[10,"unary_minus","","Computes the unary minus of a matrix",4],[10,"inner_prod","","Inner product or dot product of two vectors\nBoth must be column vectors\nBoth must have same length\nresult = a' * b.",4],[10,"outer_prod","","Outer product of two vectors\nBoth must be column vectors\nBoth must have same length\nresult = a * b'.",4],[10,"append_columns","","Appends one or more columns at the end of matrix",4],[10,"prepend_columns","","Prepends one or more columns at the beginning of matrix",4],[10,"insert_columns","","Inserts columns at the specified location",4],[10,"append_rows","","Appends one or more rows at the bottom of matrix",4],[10,"prepend_rows","","Prepends one or more rows at the top of matrix",4],[10,"insert_rows","","Inserts rows at the specified location",4],[10,"ero_switch","","Row switching.",4],[10,"ero_scale","","Row scaling by a factor.",4],[10,"ero_scale_add","","Row scaling by a factor and adding to another row.\nr_i = r_i + k * r_j",4],[10,"view","","Creates a view on the matrix",4],[10,"max_row_wise","","Returns a column vector consisting of maximum over each row",4],[10,"max_col_wise","","Returns a row vector consisting of maximum over each column",4],[10,"min_row_wise","","Returns a column vector consisting of minimum over each row",4],[10,"min_col_wise","","Returns a row vector consisting of minimum over each column",4],[10,"min_scalar","","",4],[10,"max_scalar","","",4],[10,"min_scalar_value","","Returns the minimum scalar value",4],[10,"max_scalar_value","","Returns the maximum scalar value",4],[10,"abs_min_scalar","","",4],[10,"abs_max_scalar","","",4],[10,"is_logical","","Returns if an integer matrix is a logical matrix",4],[10,"is_finite","","Returns a matrix showing all the cells which are finite",4],[10,"is_infinite","","Returns a matrix showing all the cells which are infinite",4],[10,"index","","",4],[10,"clone","","Creates a clone of the matrix",4],[10,"fmt","","",4],[10,"add","","",4],[10,"sub","","",4],[10,"mul","","",4],[10,"eq","","",4],[10,"mul_elt","","Multiplies matrices element by element",4],[10,"div_elt","","Divides matrices element by element",4],[10,"drop","","",4],[10,"print_state","","",4],[10,"as_slice_","","Returns a slice into `self`.",4],[10,"new","","",5],[10,"start_row","","Returns the start row",5],[10,"num_rows","","Returns the number of rows in the view",5],[10,"num_cols","","Returns the number of columns in the view",5],[10,"size","","Returns the size of view in an (r, c) tuple",5],[10,"num_cells","","Returns the number of cells in view",5],[10,"is_row","","Indicates if the view is a row vector",5],[10,"is_col","","Indicates if the view is a column vector",5],[10,"is_scalar","","Indicates if the view is a scalar actually",5],[10,"is_vector","","Indicates if the view is a vector",5],[10,"is_empty","","Indicates if the view is empty",5],[10,"is_square","","Indicates if the view is square",5],[10,"get","","Gets an element in the view",5],[10,"set","","Sets an element in the view",5],[10,"index_to_cell","","Converts an index to cell address (row, column)",5],[10,"cell_to_index","","Converts a cell address to an index (r, c) to index",5],[10,"to_std_vec","","Converts the view to vector from standard library",5],[10,"to_matrix","","Returns the view as a new matrix.\nCreates a copy of the data.",5],[10,"min_scalar","","",5],[10,"max_scalar","","",5],[10,"min_scalar_value","","Returns the minimum scalar value",5],[10,"max_scalar_value","","Returns the maximum scalar value",5],[10,"abs_min_scalar","","",5],[10,"abs_max_scalar","","",5],[10,"ero_switch","","Row switching.",5],[10,"ero_scale","","Row scaling by a factor.",5],[10,"ero_scale_add","","Row scaling by a factor and adding to another row.\nr_i = r_i + k * r_j\nThe j-th row can be outside the view also.\nThis is the row relative to the start of the view.",5],[10,"add","","",5],[10,"fmt","","",5],[0,"linalg","scirust",""],[1,"GaussElimination","scirust::linalg","A Gauss elimination problem specification"],[11,"a","","",6],[11,"b","","",6],[10,"new","","Setup of a new Gauss elimination problem.",6],[10,"solve","","Carries out the procedure of Gauss elimination.",6],[10,"new","","Setup of a new Gauss elimination problem.",6],[10,"solve","","Carries out the procedure of Gauss elimination.",6]],"paths":[[2,"MatrixError"],[1,"RowIterator"],[1,"ColIterator"],[1,"CellIterator"],[1,"Matrix"],[1,"MatrixView"],[1,"GaussElimination"]]};
initSearch(searchIndex);
