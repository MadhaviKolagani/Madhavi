<?php

App::uses('AppController', 'Controller');

/**
 * Books Controller
 *
 * @property Book $Book
 * @property PaginatorComponent $Paginator
 * @property SessionComponent $Session
 */
class BooksController extends AppController {

    /**
     * Components
     *
     * @var array
     */
    public $components = array('Paginator', 'Session', 'DataTable', 'RequestHandler');

    /**
     * index method
     *
     * @return void
     */
    public function index() {
        $conditions = array();
        $this->Book->recursive = 0;
        /*$conditions[0] = "";*/
       /* if (!empty($this->request->query)) {
            if (!empty($this->request->query['iColumns'])) {
                $conditions = array(
                    "Book.name like '%".$this->request->query['sSearch_0']."%'",
                    "Author.name like '%".$this->request->query['sSearch_1']."%'",
                    "Genre.name like '%".$this->request->query['sSearch_2']."%'",
                );
            }
        }*/
        
        if (!empty($this->request->query)) {
            if (!empty($this->request->query['iColumns'])) {
                for ($i=0;$i<$this->request->query['iColumns'];$i++) {
                    $search_flag = $this->request->query['bSearchable_'.$i];
                    if ( $search_flag == "true") {
                        $single_condition = $this->request->query['mDataProp_'.$i]." like '%".$this->request->query['sSearch_'.$i]."%'";
                        array_push($conditions,$single_condition);
                    }
                }
            }
        }
               	
        if ($this->RequestHandler->responseType() == 'json') {
            $this->autoRender = false;
            $this->paginate = array(
                'fields' => array('Book.id', 'Book.name', 'Book.author_id', 'Book.genre_id'),
                'link' => array(
                    'Author' => array(
                        'fields' => array('id', 'name')
                    ),
                    'Genre' => array(
                        'fields' => array('id', 'name')
                    ),
                ),
                'order' => 'Book.Id ASC',
                'conditions' => $conditions
            );
            $this->DataTable->mDataProp = true;
            echo json_encode($this->DataTable->getResponse());
        }
    }

    /**
     * view method
     *
     * @throws NotFoundException
     * @param string $id
     * @return void
     */
    public function view($id = null) {
        if (!$this->Book->exists($id)) {
            throw new NotFoundException(__('Invalid book'));
        }
        $options = array('conditions' => array('Book.' . $this->Book->primaryKey => $id));
        $this->set('book', $this->Book->find('first', $options));
    }

    /**
     * add method
     *
     * @return void
     */
    public function add() {
        if ($this->request->is('post')) {
            $this->Book->create();
            if ($this->Book->save($this->request->data)) {
                $this->Session->setFlash(__('The book has been saved.'));
                //return $this->redirect(array('action' => 'index'));
            } else {
                $this->Session->setFlash(__('The book could not be saved. Please, try again.'));
            }
        }
        $authors = $this->Book->Author->find('list');
        $genres = $this->Book->Genre->find('list');
        $this->set(compact('authors', 'genres'));
    }

    /**
     * edit method
     *
     * @throws NotFoundException
     * @param string $id
     * @return void
     */
    public function edit($id = null) {
        if (!$this->Book->exists($id)) {
            throw new NotFoundException(__('Invalid book'));
        }
        if ($this->request->is(array('post', 'put'))) {
            if ($this->Book->save($this->request->data)) {
                $this->Session->setFlash(__('The book has been saved.'));
                return $this->redirect(array('action' => 'index'));
            } else {
                $this->Session->setFlash(__('The book could not be saved. Please, try again.'));
            }
        } else {
            $options = array('conditions' => array('Book.' . $this->Book->primaryKey => $id));
            $this->request->data = $this->Book->find('first', $options);
        }
        $authors = $this->Book->Author->find('list');
        $genres = $this->Book->Genre->find('list');
        $this->set(compact('authors', 'genres'));
    }

    /**
     * delete method
     *
     * @throws NotFoundException
     * @param string $id
     * @return void
     */
    public function delete($id = null) {
        $this->Book->id = $id;
        if (!$this->Book->exists()) {
            throw new NotFoundException(__('Invalid book'));
        }
        $this->request->allowMethod('post', 'delete');
        if ($this->Book->delete()) {
            $this->Session->setFlash(__('The book has been deleted.'));
        } else {
            $this->Session->setFlash(__('The book could not be deleted. Please, try again.'));
        }
        return $this->redirect(array('action' => 'index'));
    }

}