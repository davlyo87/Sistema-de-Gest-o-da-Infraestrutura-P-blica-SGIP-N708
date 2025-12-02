import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    color: #333;
  }

  .App {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  .form-denuncia {
    background-color: #fff;
    padding: 40px;
    margin: 20px 0;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  .form-denuncia h2 {
    text-align: center;
    margin-bottom: 20px;
  }

  .form-denuncia input, .form-denuncia textarea {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    border-radius: 5px;
  }

  .form-denuncia button {
    width: 100%;
    padding: 12px;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  .form-denuncia button:disabled {
    background-color: #bbb;
  }

  .form-denuncia .error {
    color: red;
    text-align: center;
    margin-bottom: 10px;
  }

  .form-denuncia .success {
    color: green;
    text-align: center;
    margin-bottom: 10px;
  }

  .header {
    background-color: #007BFF;
    padding: 10px 0;
  }

  .header nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
  }

  .header nav ul li {
    margin: 0 20px;
  }

  .header nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
  }

  /* Adicionando Media Queries para Responsividade */

  @media (max-width: 768px) {
    .App {
      padding: 10px;
    }

    .form-denuncia {
      padding: 20px;
    }

    .form-denuncia input, .form-denuncia textarea {
      padding: 8px;
    }

    .form-denuncia button {
      padding: 10px;
    }

    .header nav ul {
      flex-direction: column;
    }

    .header nav ul li {
      margin: 10px 0;
    }

    .header nav ul li a {
      font-size: 16px;
    }
  }

  @media (max-width: 480px) {
    .form-denuncia {
      padding: 15px;
    }

    .form-denuncia input, .form-denuncia textarea {
      padding: 6px;
    }

    .form-denuncia button {
      padding: 8px;
    }
  }
`;

export default GlobalStyle;