import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Users, UserPlus, BarChart3, Calendar, Phone, Mail, MapPin, Building } from 'lucide-react'
import './App.css'

function App() {
  const [clientes, setClientes] = useState([
    {
      id: 'CLI001',
      nome: 'Empresa ABC Ltda',
      contato: 'João Silva',
      email: 'joao@empresaabc.com',
      telefone: '(11) 99999-1111',
      servicos: 'Gestão de Tráfego Facebook/Instagram',
      status: 'Ativo',
      dataInicio: '2024-01-15',
      observacoes: 'Cliente muito satisfeito, renovação provável'
    },
    {
      id: 'CLI002',
      nome: 'Loja XYZ',
      contato: 'Maria Santos',
      email: 'maria@lojaxyz.com',
      telefone: '(21) 88888-2222',
      servicos: 'Google Ads + Facebook Ads',
      status: 'Ativo',
      dataInicio: '2024-03-01',
      observacoes: 'Primeiro mês, acompanhar de perto'
    }
  ])

  const [leads, setLeads] = useState([
    {
      id: 'LEAD001',
      nomeEmpresa: 'Padaria do Bairro',
      contato: 'Ana Paula',
      segmento: 'Alimentação',
      whatsapp: '(11) 91111-1111',
      cidade: 'São Paulo',
      origem: 'Instagram',
      status: 'Em Contato',
      dataCadastro: '2024-06-01',
      observacoes: 'Interessada em Facebook Ads'
    },
    {
      id: 'LEAD002',
      nomeEmpresa: 'Clínica Odontológica Sorriso',
      contato: 'Dr. Carlos',
      segmento: 'Saúde',
      whatsapp: '(21) 92222-2222',
      cidade: 'Rio de Janeiro',
      origem: 'TNG LEADS',
      status: 'Proposta Enviada',
      dataCadastro: '2024-06-03',
      observacoes: 'Aguardando retorno da proposta'
    }
  ])

  const [novoCliente, setNovoCliente] = useState({
    nome: '',
    contato: '',
    email: '',
    telefone: '',
    servicos: '',
    status: 'Ativo',
    dataInicio: '',
    observacoes: ''
  })

  const [novoLead, setNovoLead] = useState({
    nomeEmpresa: '',
    contato: '',
    segmento: '',
    whatsapp: '',
    cidade: '',
    origem: '',
    status: 'Novo',
    observacoes: ''
  })

  const adicionarCliente = () => {
    if (novoCliente.nome && novoCliente.contato) {
      const cliente = {
        ...novoCliente,
        id: `CLI${String(clientes.length + 1).padStart(3, '0')}`,
        dataInicio: novoCliente.dataInicio || new Date().toISOString().split('T')[0]
      }
      setClientes([...clientes, cliente])
      setNovoCliente({
        nome: '',
        contato: '',
        email: '',
        telefone: '',
        servicos: '',
        status: 'Ativo',
        dataInicio: '',
        observacoes: ''
      })
    }
  }

  const adicionarLead = () => {
    if (novoLead.nomeEmpresa && novoLead.contato) {
      const lead = {
        ...novoLead,
        id: `LEAD${String(leads.length + 1).padStart(3, '0')}`,
        dataCadastro: new Date().toISOString().split('T')[0]
      }
      setLeads([...leads, lead])
      setNovoLead({
        nomeEmpresa: '',
        contato: '',
        segmento: '',
        whatsapp: '',
        cidade: '',
        origem: '',
        status: 'Novo',
        observacoes: ''
      })
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Ativo': return 'bg-green-100 text-green-800'
      case 'Pausado': return 'bg-yellow-100 text-yellow-800'
      case 'Concluído': return 'bg-blue-100 text-blue-800'
      case 'Cancelado': return 'bg-red-100 text-red-800'
      case 'Novo': return 'bg-blue-100 text-blue-800'
      case 'Em Contato': return 'bg-yellow-100 text-yellow-800'
      case 'Proposta Enviada': return 'bg-purple-100 text-purple-800'
      case 'Negociação': return 'bg-orange-100 text-orange-800'
      case 'Convertido': return 'bg-green-100 text-green-800'
      case 'Perdido': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">CRM Gestor de Tráfego</h1>
          <p className="text-gray-600">Sistema de gestão de clientes e prospecção</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Users className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Clientes</p>
                  <p className="text-2xl font-bold text-gray-900">{clientes.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <UserPlus className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Leads</p>
                  <p className="text-2xl font-bold text-gray-900">{leads.length}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Clientes Ativos</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {clientes.filter(c => c.status === 'Ativo').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Leads em Negociação</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {leads.filter(l => l.status === 'Negociação' || l.status === 'Proposta Enviada').length}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="clientes" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="clientes">Clientes</TabsTrigger>
            <TabsTrigger value="leads">Leads</TabsTrigger>
            <TabsTrigger value="novo-cliente">Novo Cliente</TabsTrigger>
            <TabsTrigger value="novo-lead">Novo Lead</TabsTrigger>
          </TabsList>

          <TabsContent value="clientes" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Lista de Clientes</CardTitle>
                <CardDescription>Gerencie seus clientes ativos</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {clientes.map((cliente) => (
                    <Card key={cliente.id} className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Building className="h-4 w-4 text-gray-500" />
                            <h3 className="font-semibold">{cliente.nome}</h3>
                            <Badge className={getStatusColor(cliente.status)}>{cliente.status}</Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{cliente.contato}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Mail className="h-4 w-4" />
                              <span>{cliente.email}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Phone className="h-4 w-4" />
                              <span>{cliente.telefone}</span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600">{cliente.servicos}</p>
                          {cliente.observacoes && (
                            <p className="text-sm text-gray-500 italic">{cliente.observacoes}</p>
                          )}
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <p>Início: {new Date(cliente.dataInicio).toLocaleDateString('pt-BR')}</p>
                          <p>ID: {cliente.id}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="leads" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Lista de Leads</CardTitle>
                <CardDescription>Acompanhe seus leads e oportunidades</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leads.map((lead) => (
                    <Card key={lead.id} className="p-4">
                      <div className="flex justify-between items-start">
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Building className="h-4 w-4 text-gray-500" />
                            <h3 className="font-semibold">{lead.nomeEmpresa}</h3>
                            <Badge className={getStatusColor(lead.status)}>{lead.status}</Badge>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{lead.contato}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Phone className="h-4 w-4" />
                              <span>{lead.whatsapp}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{lead.cidade}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 text-sm text-gray-600">
                            <span>Segmento: {lead.segmento}</span>
                            <span>Origem: {lead.origem}</span>
                          </div>
                          {lead.observacoes && (
                            <p className="text-sm text-gray-500 italic">{lead.observacoes}</p>
                          )}
                        </div>
                        <div className="text-right text-sm text-gray-500">
                          <p>Cadastro: {new Date(lead.dataCadastro).toLocaleDateString('pt-BR')}</p>
                          <p>ID: {lead.id}</p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="novo-cliente" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Adicionar Novo Cliente</CardTitle>
                <CardDescription>Cadastre um novo cliente no sistema</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome da Empresa</Label>
                    <Input
                      id="nome"
                      value={novoCliente.nome}
                      onChange={(e) => setNovoCliente({...novoCliente, nome: e.target.value})}
                      placeholder="Ex: Empresa ABC Ltda"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contato">Contato Principal</Label>
                    <Input
                      id="contato"
                      value={novoCliente.contato}
                      onChange={(e) => setNovoCliente({...novoCliente, contato: e.target.value})}
                      placeholder="Ex: João Silva"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={novoCliente.email}
                      onChange={(e) => setNovoCliente({...novoCliente, email: e.target.value})}
                      placeholder="Ex: joao@empresa.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input
                      id="telefone"
                      value={novoCliente.telefone}
                      onChange={(e) => setNovoCliente({...novoCliente, telefone: e.target.value})}
                      placeholder="Ex: (11) 99999-9999"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="servicos">Serviços Contratados</Label>
                    <Input
                      id="servicos"
                      value={novoCliente.servicos}
                      onChange={(e) => setNovoCliente({...novoCliente, servicos: e.target.value})}
                      placeholder="Ex: Gestão de Tráfego Facebook/Instagram"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select value={novoCliente.status} onValueChange={(value) => setNovoCliente({...novoCliente, status: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Ativo">Ativo</SelectItem>
                        <SelectItem value="Pausado">Pausado</SelectItem>
                        <SelectItem value="Concluído">Concluído</SelectItem>
                        <SelectItem value="Cancelado">Cancelado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dataInicio">Data de Início</Label>
                    <Input
                      id="dataInicio"
                      type="date"
                      value={novoCliente.dataInicio}
                      onChange={(e) => setNovoCliente({...novoCliente, dataInicio: e.target.value})}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="observacoes">Observações</Label>
                  <Textarea
                    id="observacoes"
                    value={novoCliente.observacoes}
                    onChange={(e) => setNovoCliente({...novoCliente, observacoes: e.target.value})}
                    placeholder="Observações sobre o cliente..."
                  />
                </div>
                <Button onClick={adicionarCliente} className="w-full">
                  Adicionar Cliente
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="novo-lead" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Adicionar Novo Lead</CardTitle>
                <CardDescription>Cadastre um novo lead para prospecção</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="nomeEmpresa">Nome da Empresa</Label>
                    <Input
                      id="nomeEmpresa"
                      value={novoLead.nomeEmpresa}
                      onChange={(e) => setNovoLead({...novoLead, nomeEmpresa: e.target.value})}
                      placeholder="Ex: Padaria do Bairro"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contatoLead">Contato</Label>
                    <Input
                      id="contatoLead"
                      value={novoLead.contato}
                      onChange={(e) => setNovoLead({...novoLead, contato: e.target.value})}
                      placeholder="Ex: Ana Paula"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="segmento">Segmento</Label>
                    <Input
                      id="segmento"
                      value={novoLead.segmento}
                      onChange={(e) => setNovoLead({...novoLead, segmento: e.target.value})}
                      placeholder="Ex: Alimentação"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="whatsapp">WhatsApp</Label>
                    <Input
                      id="whatsapp"
                      value={novoLead.whatsapp}
                      onChange={(e) => setNovoLead({...novoLead, whatsapp: e.target.value})}
                      placeholder="Ex: (11) 91111-1111"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cidade">Cidade</Label>
                    <Input
                      id="cidade"
                      value={novoLead.cidade}
                      onChange={(e) => setNovoLead({...novoLead, cidade: e.target.value})}
                      placeholder="Ex: São Paulo"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="origem">Origem</Label>
                    <Select value={novoLead.origem} onValueChange={(value) => setNovoLead({...novoLead, origem: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a origem" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Instagram">Instagram</SelectItem>
                        <SelectItem value="TNG LEADS">TNG LEADS</SelectItem>
                        <SelectItem value="Google Maps">Google Maps</SelectItem>
                        <SelectItem value="Indicação">Indicação</SelectItem>
                        <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                        <SelectItem value="Facebook">Facebook</SelectItem>
                        <SelectItem value="Site">Site</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="statusLead">Status</Label>
                    <Select value={novoLead.status} onValueChange={(value) => setNovoLead({...novoLead, status: value})}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Novo">Novo</SelectItem>
                        <SelectItem value="Em Contato">Em Contato</SelectItem>
                        <SelectItem value="Proposta Enviada">Proposta Enviada</SelectItem>
                        <SelectItem value="Negociação">Negociação</SelectItem>
                        <SelectItem value="Convertido">Convertido</SelectItem>
                        <SelectItem value="Perdido">Perdido</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="observacoesLead">Observações</Label>
                  <Textarea
                    id="observacoesLead"
                    value={novoLead.observacoes}
                    onChange={(e) => setNovoLead({...novoLead, observacoes: e.target.value})}
                    placeholder="Observações sobre o lead..."
                  />
                </div>
                <Button onClick={adicionarLead} className="w-full">
                  Adicionar Lead
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App

